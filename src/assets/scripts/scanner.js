import * as jq from 'jquery';
import * as jqui from 'jquery-ui';
import * as jqcoo from './jquery.cookie-1.4.1.min';
import * as rgs from './regula.sdk.strings';
import {
  languages,
  eRPRM_ResultType,
  eRPRM_Lights,
  eRPRM_FieldVerificationResult,
  eRFID_ResultType,
} from './regula.sdk.enums';
import * as rgu from './regula.sdk.utils';
import { CheckReaderResultJSON } from './regula.sdk.apiClient';
import {
  initRegulaReader,
  setLang,
  OnProcessingStartedCallback,
  OnProcessingFinishedCallback,
  Connect,
  IsReaderResultTypeAvailable,
  GetPropertyValue,
  GetReaderFileImageByLightIndexAndPageIndex,
  CheckReaderResultXML,
  GetTranslation,
  CheckRFIDResultXML,
} from './regula.sdk.apiClient_Legacy';
import * as socket from './socket.io';
import * as bs from './bs64';

const $ = jq;

// if (window.location.href.indexOf('/scan-passport') !== -1) {
var firstName;
var lastName;
var passportJSHR;
var passportImage;
var passportIssuedDate;
var passportNumber;
var url = 'http:' + '//' + 'localhost' + ':5000';
// if (window.location.port != null) {
//   url += ':' + window.location.port;
// }
url += '/Regula.SDK.Api';

var script = document.createElement('script');

if (
  navigator.userAgent.indexOf('Win') != -1 ||
  navigator.userAgent.indexOf('WOW64') != -1
) {
  script.setAttribute('src', 'Scripts/regula.sdk.apiClient.js');
} else {
  script.setAttribute('src', 'Scripts/regula.sdk.socketsClient.js');
}
script.type = 'text/javascript';
script.onload = function () {
  initRegulaReader(url);

  getLastResults();
};
document.head.appendChild(script);

$(function () {
  setLang(languages.English);
});

OnProcessingStartedCallback = function () {
  Connect();
};

//Assign function values to event callbacks here
OnProcessingFinishedCallback = function () {
  hideProgress();
  $('#currentProcessLbl').text('');

  getLastResults();
};

function getLastResults() {
  //Getting scanned images

  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_RawImage,
    function (count) {
      if (count > 0) {
        GetPropertyValue('PagesCount', function (pages) {
          for (var page = 0; page < pages; page++) {
            for (var light in eRPRM_Lights) {
              GetReaderFileImageByLightIndexAndPageIndex(
                eRPRM_Lights[light],
                page,
                function (data) {
                  if (data != null)
                    $('#photosLayout').append(
                      $('<tr>').append(
                        $('<td>').append(
                          $('<img>')
                            .attr('src', 'data:image/png;base64,' + data)
                            .addClass('docImg')
                            .click(function () {
                              showDialog('data:image/png;base64,' + data);
                            })
                        )
                      )
                    );
                }
              );
            }
          }
        });
      }
    }
  );

  //Getting text results comparison
  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_OCRLexicalAnalyze,
    function (count) {
      if (count > 0) {
        $('#lexTabBtn').show();
      }

      for (var i = 0; i < count; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_OCRLexicalAnalyze,
          i,
          0,
          function (data) {
            ParseLexicalData(data);
          }
        );
        CheckReaderResultJSON(
          eRPRM_ResultType.RPRM_ResultType_OCRLexicalAnalyze,
          i,
          0,
          function (data) {
            data = JSON.parse(data);
            console.log(data);
            lastName = data.ListVerifiedFields.pFieldMaps[8].Field_MRZ;
            firstName = data.ListVerifiedFields.pFieldMaps[9].Field_MRZ;
            passportJSHR = data.ListVerifiedFields.pFieldMaps[7].Field_MRZ;
            passportNumber = data.ListVerifiedFields.pFieldMaps[2].Field_MRZ;
            passportIssuedDate = data.ListVerifiedFields.pFieldMaps[4].Field_RFID;
          }
        );
      }
    }
  );

  //Getting security features
  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_Authenticity,
    function (securityCount) {
      var securityArray = new Array(securityCount);
      var gotSecurityResults = 0;
      for (var i = 0; i < securityCount; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_Authenticity,
          i,
          0,
          function (data, type, index) {
            gotSecurityResults += 1;
            securityArray[index] = data;

            if (gotSecurityResults == securityCount) {
              for (var k = 0; k < securityCount; k++) {
                const $xmlDoc = $($.parseXML(securityArray[k]));
                var properIndex = $xmlDoc.find('PageIndex').get(0).textContent;
                var pageText = GetTranslation('strPage') + ' ' + (k + 1);
                if (properIndex == 255) {
                  pageText = GetTranslation('strWholeDocument');
                }

                if (securityCount > 1) {
                  //we're dealing with multiple page scan here

                  if (k == 0) {
                    $('#securityTable')
                      .find('tbody')
                      .append(
                        $('<tr>')
                          .append($('<th>').text(pageText).attr('colspan', 10))
                          .addClass('pageSeparator')
                      );
                  } else {
                    $('#securityTable')
                      .find('tbody')
                      .append(
                        $('<tr>').attr('colspan', 10).addClass('pageSeparatorEmpty')
                      )
                      .append(
                        $('<tr>')
                          .append($('<th>').text(pageText).attr('colspan', 10))
                          .addClass('pageSeparator')
                      );
                  }
                }

                ParseSecurityData($xmlDoc);
              }

              $('#securityTabBtn').show();
            }
          }
        );
      }
    }
  );

  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_Graphics,
    function (count) {
      if (count > 0) {
        $('#graphicsTabBtn').show();
      }

      for (var i = 0; i < count; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_Graphics,
          i,
          0,
          function (data) {
            ParseGraphics(data, false);
          }
        );
        CheckReaderResultJSON(
          eRPRM_ResultType.RPRM_ResultType_Graphics,
          i,
          0,
          function (data) {
            data = JSON.parse(data);
            passportImage = 'data:image/png;base64,';
            passportImage += data.DocGraphicsInfo.pArrayFields[0].image.image;
            console.log(passportNumber, firstName, lastName, passportIssuedDate);
            // comment
            if (localStorage.getItem('userId')) {
              fetch('https://mobile.soliq.uz/my3-api/tax-free-api/passport/save', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  passportNumber: passportNumber,
                  fullName: `${firstName} ${lastName}`,
                  passportJSHR: passportJSHR,
                  passportImage: passportImage,
                  passportDate: passportIssuedDate,
                  userId: localStorage.getItem('userId'),
                }),
              })
                .then((res) => {
                  console.log(res);
                  localStorage.setItem('userId', '');
                  localStorage.setItem('userInfo', JSON.stringify(res));
                  localStorage.setItem('status', 'true');
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            // commetn
          }
        );
      }
    }
  );

  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_BarCodes,
    function (count) {
      if (count > 0) {
        $('#barcodeTabBtn').show();
      }

      for (var i = 0; i < count; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_BarCodes,
          i,
          0,
          function (data) {
            ParseBarcodeBinaryData(data);
          }
        );
      }
    }
  );

  CheckRFIDResultXML(eRFID_ResultType.RFID_ResultType_RFID_ImageData, 0, function (data) {
    if (data != null) {
      $('#graphicsTabBtn').show();
      ParseGraphics(data, true);
    }
  });

  //Getting RFID technical data
  GetPropertyValue('ChipWasDetected', function (data) {
    if (data) {
      ParseRFIDChipData();
      GetRfidSummary();
      $('#rfidBtn').show();
    }
  });

  IsReaderResultTypeAvailable(
    eRPRM_ResultType.RPRM_ResultType_Portrait_Comparison,
    function (count) {
      if (count > 0) {
        $('#faceMatchTabBtn').show();
      }

      for (var i = 0; i < count; i++) {
        CheckReaderResultXML(
          eRPRM_ResultType.RPRM_ResultType_Portrait_Comparison,
          i,
          0,
          function (data) {
            ParseLivenessData(data);
          }
        );
      }
    }
  );

  //Getting summary
  GetStatuses();

  $('#lexTabBtn').click();
}

OnNotificationRFIDCallback = function (ACode, AValue) {
  switch (ACode) {
    case eRFID_NotificationCodes.RFID_Notification_Progress:
      updateProgressBar(AValue);
      break;
  }

  var hiWord = ACode & 0xffff0000;
  if (hiWord == eRFID_NotificationCodes.RFID_Notification_PCSC_ReadingDatagroup) {
    var loWord = ACode & 0x0000ffff;
    var dg = getRFIDDG(loWord);
    $('#currentProcessLbl').text(dg);
  }
};

//Helping functions
function getRFIDDG(loWord) {
  for (var index in eRFID_DataFile_Type) {
    if (eRFID_DataFile_Type[index] == loWord) return index;
  }
  return 'undefined';
}

function ParseLexicalData(data) {
  var hasMrz = 0,
    hasRfis = 0,
    hasBarcode = 0,
    hasVisual = 0;
  $xmlDoc = $($.parseXML(data));
  $xmlDoc.find('Document_Field_Analysis_Info').each(function (key, element) {
    var fieldType = GetTranslation(
      getFromEnum(eVisualFieldTypeStrings, $(element).children('Type')[0].textContent)
    );
    var lcid = $(element).children('LCID')[0].textContent;
    if (lcid != 0) fieldType = fieldType + ' (' + lcid + ')';
    var mrz = $(element).children('Field_MRZ')[0].textContent;
    var rfid = $(element).children('Field_RFID')[0].textContent;
    var barcode = $(element).children('Field_Barcode')[0].textContent;
    var visual = $(element).children('Field_Visual')[0].textContent;

    var mrzStat = $(element).children('Matrix1')[0].textContent;
    var mrzColor =
      mrzStat == eRPRM_FieldVerificationResult.RCF_Verified
        ? 'Green'
        : mrzStat == eRPRM_FieldVerificationResult.RCF_Not_Verified
        ? 'Red'
        : 'Black';

    var rfidStat = $(element).children('Matrix2')[0].textContent;
    var rfidColor =
      rfidStat == eRPRM_FieldVerificationResult.RCF_Verified
        ? 'Green'
        : rfidStat == eRPRM_FieldVerificationResult.RCF_Not_Verified
        ? 'Red'
        : 'Black';

    var barcodeStat = $(element).children('Matrix4')[0].textContent;
    var barcodeColor =
      barcodeStat == eRPRM_FieldVerificationResult.RCF_Verified
        ? 'Green'
        : barcodeStat == eRPRM_FieldVerificationResult.RCF_Not_Verified
        ? 'Red'
        : 'Black';

    var visualStat = $(element).children('Matrix3')[0].textContent;
    var visualColor =
      visualStat == eRPRM_FieldVerificationResult.RCF_Verified
        ? 'Green'
        : visualStat == eRPRM_FieldVerificationResult.RCF_Not_Verified
        ? 'Red'
        : 'Black';

    var mrzRfid = $(element).children('Matrix5')[0].textContent;
    var mrzRfidColor =
      mrzRfid == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : mrzRfid == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var mrzVisual = $(element).children('Matrix6')[0].textContent;
    var mrzVisualColor =
      mrzVisual == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : mrzVisual == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var mrzBarcode = $(element).children('Matrix7')[0].textContent;
    var mrzBarcodeColor =
      mrzBarcode == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : mrzBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var rfidVisual = $(element).children('Matrix8')[0].textContent;
    var rfidVisualColor =
      rfidVisual == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : rfidVisual == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var visualBarcode = $(element).children('Matrix9')[0].textContent;
    var visualBarcodeColor =
      visualBarcode == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : visualBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var rfidBarcode = $(element).children('Matrix10')[0].textContent;
    var rfidBarcodeColor =
      rfidBarcode == eRPRM_FieldVerificationResult.RCF_Compare_True
        ? 'Green'
        : rfidBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False
        ? 'Red'
        : 'Grey';

    var total = null;
    if (
      mrzStat == eRPRM_FieldVerificationResult.RCF_Not_Verified ||
      rfidStat == eRPRM_FieldVerificationResult.RCF_Not_Verified ||
      barcodeStat == eRPRM_FieldVerificationResult.RCF_Not_Verified ||
      visualStat == eRPRM_FieldVerificationResult.RCF_Not_Verified ||
      mrzRfid == eRPRM_FieldVerificationResult.RCF_Compare_False ||
      mrzVisual == eRPRM_FieldVerificationResult.RCF_Compare_False ||
      mrzBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False ||
      rfidVisual == eRPRM_FieldVerificationResult.RCF_Compare_False ||
      visualBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False ||
      rfidBarcode == eRPRM_FieldVerificationResult.RCF_Compare_False
    )
      total = false;
    else {
      var sum =
        mrzStat +
        rfidStat +
        barcodeStat +
        visualStat +
        mrzRfid +
        mrzVisual +
        mrzBarcode +
        rfidVisual +
        visualBarcode +
        rfidBarcode;
      if (sum > 0) total = true;
    }

    var color = '#ededed';
    if (key % 2 == 0) {
      color = '#fcfcfc';
    }

    $('#lexTable')
      .find('tbody')
      .append(
        $('<tr>')
          .css('background-color', color)
          .append(
            $('<td>').text(fieldType),
            $('<td>').text(mrz).addClass('lexMrz').css('color', mrzColor),
            $('<td>').text(rfid).addClass('lexRfid').css('color', rfidColor),
            $('<td>').text(barcode).addClass('lexBarcode').css('color', barcodeColor),
            $('<td>').text(visual).addClass('lexVisualOcr').css('color', visualColor),
            $('<td>')
              .addClass('lexMrzRfid')
              .append(
                $('<img>', { src: 'Content/' + mrzRfidColor + '.png' }).addClass(
                  'validityInd'
                )
              ),
            $('<td>')
              .addClass('lexMrzBarcode')
              .append(
                $('<img>', {
                  src: 'Content/' + mrzBarcodeColor + '.png',
                }).addClass('validityInd')
              ),
            $('<td>')
              .addClass('lexMrzVisual')
              .append(
                $('<img>', {
                  src: 'Content/' + mrzVisualColor + '.png',
                }).addClass('validityInd')
              ),
            $('<td>')
              .addClass('lexRfidBarcode')
              .append(
                $('<img>', {
                  src: 'Content/' + rfidBarcodeColor + '.png',
                }).addClass('validityInd')
              ),
            $('<td>')
              .addClass('lexRfidVisual')
              .append(
                $('<img>', {
                  src: 'Content/' + rfidVisualColor + '.png',
                }).addClass('validityInd')
              ),
            $('<td>')
              .addClass('lexBarcodeVisual')
              .append(
                $('<img>', {
                  src: 'Content/' + visualBarcodeColor + '.png',
                }).addClass('validityInd')
              ),
            $('<td>')
              .addClass('lextotal')
              .append(
                $('<img>', {
                  src:
                    'Content/' +
                    (total == true ? 'Green' : total == false ? 'Red' : 'Grey') +
                    '.png',
                }).addClass('validityInd')
              )
          )
      );

    if (mrz != '') hasMrz = 1;
    if (rfid != '') hasRfis = 1;
    if (barcode != '') hasBarcode = 1;
    if (visual != '') hasVisual = 1;
  });

  if (hasMrz == 1) $('.lexMrz').show();
  if (hasRfis == 1) $('.lexRfid').show();
  if (hasBarcode == 1) $('.lexBarcode').show();
  if (hasVisual == 1) $('.lexVisualOcr').show();

  if (hasMrz == 1 && hasRfis == 1) $('.lexMrzRfid').show();
  if (hasMrz == 1 && hasVisual == 1) $('.lexMrzVisual').show();
  if (hasMrz == 1 && hasBarcode == 1) $('.lexMrzBarcode').show();
  if (hasVisual == 1 && hasRfis == 1) $('.lexRfidVisual').show();
  if (hasVisual == 1 && hasBarcode == 1) $('.lexBarcodeVisual').show();
  if (hasBarcode == 1 && hasRfis == 1) $('.lexRfidBarcode').show();
}

function ParseSecurityData(xmlDoc) {
  var authElements = $xmlDoc.find('Document_Authenticity');
  var authCount = authElements.length;
  for (var i = 0; i < authCount; i++) {
    var element = authElements[i];

    $(element)
      .children()
      .each(function (cKey, cElement) {
        var oneTable = $(document.createElement('table')).addClass('results_table');

        var securityHeader;
        switch (cElement.tagName) {
          case 'IR_B900':
            securityHeader = GetTranslation('strIRB900');
            break;
          case 'UV_Luminescence':
            securityHeader = GetTranslation('strUVLuminescence');
            break;
          case 'IR_Visibility':
            securityHeader = GetTranslation('strIRVis');
            break;
          case 'IPI':
            securityHeader = GetTranslation('strIpi');
            break;
          case 'IR_Luminescence':
            securityHeader = GetTranslation('strIRLuminescense');
            break;
          case 'IR_Photo':
            securityHeader = GetTranslation('strIRPhotoProtection');
            break;
          case 'PHOTO_EMBED_TYPE':
            securityHeader = GetTranslation('strPhotoEmbedType');
            break;
          case 'OCRSecurityText':
            securityHeader = GetTranslation('strSecurityText');
            break;
          case 'AxialProtection':
            securityHeader = GetTranslation('strAxialProtection');
            break;
          case 'ImagePattern':
            securityHeader = GetTranslation('strImagePattern');
            break;
          case 'OVI':
            securityHeader = GetTranslation('strOVICheck');
            break;
          case 'Portrait_Comparison':
            securityHeader = GetTranslation('strPortraitComparison');
            break;
          case 'UV_Fibers':
            securityHeader = GetTranslation('strUVFibers');
            break;
          case 'UV_Background':
            securityHeader = GetTranslation('strUVBackgroundComp');
            break;
          case 'Holograms':
            securityHeader = GetTranslation('strHolograms');
            break;
          case 'Photo_Area':
            securityHeader = GetTranslation('strPhotoArea');
            break;
          case 'BarcodeFormatCheck':
            securityHeader = GetTranslation('strBarcodeFormatCheck');
            break;
          default:
            securityHeader = '';
        }

        if ($(cElement).children('Result').length > 0) {
          var result = $(cElement).children('Result')[0].textContent;
          var indColor =
            result == eCheckResult.ch_Check_OK
              ? 'Green'
              : result == eCheckResult.ch_Check_Error
              ? 'Red'
              : 'Grey';
          oneTable.append(
            $('<thead>').append(
              $('<tr>')
                .append($('<th>').text(securityHeader))
                .append(
                  $('<th>').append(
                    $('<img>')
                      .attr('src', 'Content/' + indColor + '.png')
                      .addClass('validityInd')
                  )
                )
            )
          );
        } else {
          oneTable.append(
            $('<thead>').append(
              $('<tr>').append($('<th>').attr('colspan', 2).text(securityHeader))
            )
          );
        }

        //var tbody = oneTable.find('tbody');

        $(cElement)
          .find('OneElement')
          .each(function (k, el) {
            var color = '#ededed';
            if (k % 2 == 0) {
              color = '#fcfcfc';
            }

            $(el)
              .find('ElementType')
              .each(function (i, e) {
                var result = -1;

                if ($(el).children('Result').length > 0) {
                  result = $(el).children('Result')[i].textContent;
                } else if ($(el).children('CheckResult').length > 0) {
                  result = $(el).children('CheckResult')[i].textContent;
                }

                var indColor =
                  result == eCheckResult.ch_Check_OK
                    ? 'Green'
                    : result == eCheckResult.ch_Check_Error
                    ? 'Red'
                    : 'Grey';

                oneTable.append(
                  $('<tr>')
                    .css('background-color', color)
                    .append(
                      $('<td>')
                        .text(
                          GetTranslation(
                            getFromEnum(eRPRM_SecurityFeatureType, e.textContent)
                          )
                        )
                        .css('font-weight', 'bold'),
                      $('<td>').append(
                        $('<img>')
                          .attr('src', 'Content/' + indColor + '.png')
                          .addClass('validityInd')
                      )
                    )
                );
              });

            if (cElement.tagName != 'UV_Luminescence') {
              $(el)
                .find('Visibility')
                .each(function (i, e) {
                  var visibilityText = GetTranslation('strNotVisible');
                  switch (e.textContent) {
                    case '0':
                      visibilityText = GetTranslation('strNotVisible');
                      break;
                    case '1':
                      visibilityText = GetTranslation('strVisible');
                      break;
                  }
                  oneTable.append(
                    $('<tr>')
                      .css('background-color', color)
                      .append(
                        $('<td>').text(GetTranslation('strExpected')),
                        $('<td>').text(visibilityText)
                      )
                  );
                });
            }

            $(el)
              .find('PercentValue')
              .each(function (i, e) {
                var result = -1;

                if ($(el).children('Result').length > 0) {
                  result = $(el).children('Result')[i].textContent;
                } else if ($(el).children('CheckResult').length > 0) {
                  result = $(el).children('CheckResult')[i].textContent;
                }

                var indColor =
                  result == eCheckResult.ch_Check_OK
                    ? 'Green'
                    : result == eCheckResult.ch_Check_Error
                    ? 'Red'
                    : 'Grey';

                var simPercent = GetTranslation('strSimilarity');
                if (e.textContent != '0') {
                  simPercent += ' (' + e.textContent + '%)';
                }

                oneTable.append(
                  $('<tr>')
                    .css('background-color', color)
                    .append(
                      $('<td>').text(simPercent),
                      $('<td>').append(
                        $('<img>')
                          .attr('src', 'Content/' + indColor + '.png')
                          .addClass('validityInd')
                      )
                    )
                );
              });

            var oneTypes = $(el).find('OneType');
            $(el)
              .find('File_Image')
              .each(function (i, e) {
                var type = '';
                if (oneTypes != null && oneTypes.length > 0)
                  type = $(oneTypes)[i].textContent;

                oneTable.append(
                  $('<tr>')
                    .css('background-color', color)
                    .append(
                      $('<td>').text(
                        GetTranslation(getFromEnum(eGraphicFieldType, type))
                      ),
                      $('<td>').append(
                        $('<img>').attr('src', 'data:image/png;base64,' + e.textContent)
                      )
                    )
                );
              });

            $(el)
              .find('Image Image')
              .each(function (i, e) {
                oneTable.append(
                  $('<tr>')
                    .css('background-color', color)
                    .append(
                      $('<td>').text(GetTranslation('strImage')),
                      $('<td>').append(
                        $('<img>').attr('src', 'data:image/png;base64,' + e.textContent)
                      )
                    )
                );
              });

            $(el)
              .find('EtalonImage EtalonImage')
              .each(function (i, e) {
                oneTable.append(
                  $('<tr>')
                    .css('background-color', color)
                    .append(
                      $('<td>').text(GetTranslation('strEtalonImage')),
                      $('<td>').append(
                        $('<img>').attr('src', 'data:image/png;base64,' + e.textContent)
                      )
                    )
                );
              });
          });

        $(cElement)
          .find('OneResult')
          .each(function (k, el) {
            $(el)
              .find('ResultCode')
              .each(function (i, e) {
                var result = e.textContent;
                var indColor =
                  result == eCheckResult.ch_Check_OK
                    ? 'Green'
                    : result == eCheckResult.ch_Check_Error
                    ? 'Red'
                    : 'Grey';
                oneTable.append(
                  $('<tr>').append(
                    $('<td>').text(GetTranslation('strVisible')),
                    $('<td>').append(
                      $('<img>')
                        .attr('src', 'Content/' + indColor + '.png')
                        .addClass('validityInd')
                    )
                  )
                );
              });

            $(el)
              .find('SecurityTextResultOCR')
              .each(function (i, e) {
                oneTable.append(
                  $('<tr>').append(
                    $('<td>').text(GetTranslation('strOCRText')),
                    $('<td>').text(e.textContent)
                  )
                );
              });

            $(el)
              .find('EtalonResultOCR')
              .each(function (i, e) {
                oneTable.append(
                  $('<tr>').append(
                    $('<td>').text(GetTranslation('strSecurityText')),
                    $('<td>').text(e.textContent)
                  )
                );
              });
          });

        $(cElement)
          .find('OneFiber')
          .each(function (k, el) {
            var result = $(el).find('ErrorCode')[0].textContent;
            var indColor =
              result == eCheckResult.ch_Check_OK
                ? 'Green'
                : result == eCheckResult.ch_Check_Error
                ? 'Red'
                : 'Grey';

            oneTable.append(
              $('<tr>').append(
                $('<td>').text(GetTranslation('strResult')),
                $('<td>').append(
                  $('<img>')
                    .attr('src', 'Content/' + indColor + '.png')
                    .addClass('validityInd')
                )
              )
            );

            var r = $(el).find('ColorValues_1')[0].textContent;
            var g = $(el).find('ColorValues_2')[0].textContent;
            var b = $(el).find('ColorValues_3')[0].textContent;

            oneTable.append(
              $('<tr>').append(
                $('<td>').text(GetTranslation('strColor')),
                $('<td>').css('background-color', 'rgb(' + r + ',' + g + ',' + b + ')')
              )
            );

            var areas = $(el).find('Areas')[0];
            var count = $(areas).attr('Count');
            var expected = $(el).find('ExpectedCount')[0].textContent;

            oneTable.append(
              $('<tr>').append(
                $('<td>').text(
                  GetTranslation('strFound') + '(' + GetTranslation('strExpected') + ')'
                ),
                $('<td>').text(count + '(' + expected + ')')
              )
            );
          });

        $('#securityTable')
          .find('tbody')
          .css('display', 'block')
          .append($('<tr>').css('display', 'inline-table').append(oneTable));
      });
  }
}

function ParseRFIDChipData() {
  CheckRFIDResultXML(
    eRFID_ResultType.RFID_ResultType_RFID_BinaryData,
    0,
    function (data) {
      var $xmlDoc = $($.parseXML(data));

      if ($xmlDoc.find('RFID_Type').length > 0) {
        var text = GetTranslation('strChipType');
        var value = $xmlDoc.find('RFID_Type')[0].childNodes[0].nodeValue;

        $('#rfidTable')
          .find('tbody')
          .append($('<tr>').append($('<td>').text(text)).append($('<td>').text(value)));
      }

      if ($xmlDoc.find('Support_4').length > 0) {
        text = GetTranslation('strProtocol4');
        value = $xmlDoc.find('Support_4')[0].childNodes[0].nodeValue;

        value == 'true'
          ? (value = GetTranslation('strSupported'))
          : GetTranslation('strNotSupported');

        $('#rfidTable')
          .find('tbody')
          .append($('<tr>').append($('<td>').text(text)).append($('<td>').text(value)));
      }

      if ($xmlDoc.find('Baudrate2').length > 0) {
        text = GetTranslation('strRFIDSupportedBaudrates');
        value = $xmlDoc.find('Baudrate2')[0].childNodes[0].nodeValue;
        value = parseInt(value);

        var localized = '';
        if ((value & 1) > 0) {
          localized = GetTranslation('str106');
        }
        if ((value & 2) > 0) {
          localized += '/' + GetTranslation('str212');
        }
        if ((value & 4) > 0) {
          localized += '/' + GetTranslation('str424');
        }
        if ((value & 8) > 0) {
          localized += '/' + GetTranslation('str848');
        }

        $('#rfidTable')
          .find('tbody')
          .append(
            $('<tr>').append($('<td>').text(text)).append($('<td>').text(localized))
          );
      }

      if ($xmlDoc.find('BitRateR').length > 0) {
        text = GetTranslation('strRFIDEstablishedBaudrate');
        value = $xmlDoc.find('BitRateR')[0].childNodes[0].nodeValue;
        value = parseInt(value);
        switch (value) {
          case 1:
            value = GetTranslation('str106');
            break;
          case 2:
            value = GetTranslation('str212');
            break;
          case 4:
            value = GetTranslation('str424');
            break;
          case 8:
            value = GetTranslation('str848');
            break;
        }

        $('#rfidTable')
          .find('tbody')
          .append($('<tr>').append($('<td>').text(text)).append($('<td>').text(value)));
      }

      if ($xmlDoc.find('UID').length > 0) {
        text = GetTranslation('UID');
        value = $xmlDoc.find('UID')[0].childNodes[0].nodeValue;

        $('#rfidTable')
          .find('tbody')
          .append($('<tr>').append($('<td>').text(text)).append($('<td>').text(value)));
      }

      if ($xmlDoc.find('ATR').length > 0) {
        text = GetTranslation('ATR');
        value = $xmlDoc.find('ATR')[0].childNodes[0].nodeValue;

        $('#rfidTable')
          .find('tbody')
          .append($('<tr>').append($('<td>').text(text)).append($('<td>').text(value)));
      }

      $('#rfidTable')
        .find('tbody')
        .find('tr')
        .each(function (key, element) {
          var color = '#ededed';
          if (key % 2 == 0) {
            color = '#fcfcfc';
          }
          $(element).css('background-color', color);
        });

      var parsingNotifications = $xmlDoc.find('ParsingNotifications');
      if (parsingNotifications != null && parsingNotifications.length > 0) {
        $('#rfidNotifications').css('display', 'table');
        parsingNotifications.each(function (key, element) {
          var items = parsingNotifications[key].childNodes;
          for (var k = 0; k < items.length; k++) {
            var item = items[k];
            if (item != null) {
              var val = item.childNodes[0].nodeValue.split(' [')[0];
              var translation = GetTranslation(val);

              $('#rfidNotifications')
                .find('tbody')
                .append($('<tr>').append($('<td>').text(translation)));
            }
          }
        });
      }

      var notifications = $xmlDoc.find('Notifications');
      if (notifications != null && notifications.length > 0) {
        $('#rfidNotifications').css('display', 'table');
        for (var i = 0; i < notifications.length; i++) {
          var items = notifications[i].childNodes;
          for (var k = 0; k < items.length; k++) {
            var item = items[k];
            if (item != null) {
              var val = item.childNodes[0].nodeValue.split(' [')[0];
              var translation = GetTranslation(val);

              $('#rfidNotifications')
                .find('tbody')
                .append($('<tr>').append($('<td>').text(translation)));
            }
          }
        }
      }

      $('#rfidNotifications')
        .find('tbody')
        .find('tr')
        .each(function (key, element) {
          var color = '#ededed';
          if (key % 2 == 0) {
            color = '#fcfcfc';
          }
          $(element).css('background-color', color);
        });

      if (
        GetPropertyValue('RFIDPassiveAuth', function (rfidPaStatus) {
          var tagName = 'ReadingStatus';
          if (rfidPaStatus == true) tagName = 'PA_Status';

          $xmlDoc.find('RFID_DataFile').each(function (key, element) {
            if ($(element).find('FileData').length > 0) {
              // var status = $(element).find(tagName)[0].textContent;
              var type = $(element).find('Type')[0].childNodes[0].nodeValue;
              var image = '';

              if (status.indexOf('RFID_Error_NotAvailable') != -1) {
                $('#' + type).css('background-color', 'Grey');
                image = 'Content/Grey.png';
              } else if (status.indexOf('RFID_Error_NoError') != -1) {
                $('#' + type).css('background-color', 'DarkGreen');
                image = 'Content/Green.png';
              } else {
                $('#' + type).css('background-color', 'Red');
                image = 'Content/Red.png';
              }

              // $('#rfidDataGroups')
              //   .find('tbody')
              //   .append(
              //     $('<tr>')
              //       .append($('<td>').text($(element).find('Type')[0].textContent))
              //       .append(
              //         $('<td>').append(
              //           $('<img>').attr('src', image).addClass('validityInd')
              //         )
              //       )
              //       .append(
              //         $('<td>').text($(element).find('ReadingTime')[0].textContent)
              //       )
              //       .append(
              //         $('<td>').text(
              //           $($(element).find('FileData')[0]).attr('Length')
              //         )
              //       )
              //   );
            }
          });

          $('#rfidDataGroups')
            .find('tbody')
            .find('tr')
            .each(function (key, element) {
              var color = '#ededed';
              if (key % 2 == 0) {
                color = '#fcfcfc';
              }
              $(element).css('background-color', color);
            });
        })
      );
    }
  );
}

function ParseGraphics(data, isRfid) {
  $xmlDoc = $($.parseXML(data));

  if (isRfid) {
    $xmlDoc.find('RFID_Graphic_Field').each(function (key, element) {
      var color = '#ededed';
      if (key % 2 == 0) {
        color = '#fcfcfc';
      }

      var text = GetTranslation(
        getFromEnum(
          eGraphicFieldTypeStrings,
          element.getElementsByTagName('FieldType')[0].childNodes[0].nodeValue
        )
      );
      var imgString = element
        .getElementsByTagName('File_Image')[0]
        .getElementsByTagName('Data')[0].textContent;

      $('#rfidGraphics')
        .find('tbody')
        .append(
          $('<tr>')
            .css('background-color', color)
            .append($('<td>').text(text))
            .append(
              $('<td>').append(
                $('<img>').attr('src', 'data:image/png;base64,' + imgString)
              )
            )
        );
    });
  } else {
    $xmlDoc.find('Document_Image').each(function (key, element) {
      var text = GetTranslation(
        getFromEnum(
          eGraphicFieldTypeStrings,
          element.getElementsByTagName('FieldType')[0].childNodes[0].nodeValue
        )
      );
      var imgString = element.getElementsByTagName('File_Image')[0].textContent;

      var color = '#ededed';
      if (key % 2 == 0) {
        color = '#fcfcfc';
      }

      $('#visualGraphics')
        .find('tbody')
        .append(
          $('<tr>')
            .css('background-color', color)
            .append($('<td>').text(text))
            .append(
              $('<td>').append(
                $('<img>').attr('src', 'data:image/png;base64,' + imgString)
              )
            )
        );
    });
  }
}

function ParseBarcodeBinaryData(data) {
  $xmlDoc = $($.parseXML(data));

  $xmlDoc.find('Document_Barcode').each(function (key, element) {
    var code = element.getElementsByTagName('bcCodeResult')[0].childNodes[0].nodeValue;
    if (code) {
      $('#barcodeTable')
        .find('tbody')
        .append(
          $('<tr>')
            .append($('<td>').text(GetTranslation('strResultCode')))
            .append(
              $('<td>').append(
                GetTranslation(getFromEnum(eBarCodeResultCodesStrings, code))
              )
            )
        );
    }

    var type = element.getElementsByTagName('bcType_DECODE')[0].childNodes[0].nodeValue;
    if (type) {
      $('#barcodeTable')
        .find('tbody')
        .append(
          $('<tr>')
            .append($('<td>').text(GetTranslation('strBarcodeType')))
            .append(
              $('<td>').append(GetTranslation(getFromEnum(eBarcodeTypeStrings, type)))
            )
        );
    }

    var modCount = element.getElementsByTagName('Modules')[0].getAttribute('Count');
    if (modCount) {
      $('#barcodeTable')
        .find('tbody')
        .append(
          $('<tr>')
            .append($('<td>').text(GetTranslation('strBarcodeModuleCount')))
            .append($('<td>').append(modCount))
        );
    }

    $(element)
      .find('Module')
      .each(function (moduleKey, moduleElement) {
        var modType =
          moduleElement.getElementsByTagName('mType')[0].childNodes[0].nodeValue;
        var modLength = moduleElement.getAttribute('Length');

        var value = moduleElement.getElementsByTagName('Data')[0].childNodes[0].nodeValue;
        var arr = toByteArray(value);
        var finalValue = '';
        for (var z = 0; z < arr.length; z++) {
          finalValue += arr[z];
          finalValue += ' ';
        }
        value = bin2String(finalValue);

        $('#barcodeTable')
          .find('tbody')
          .append(
            $('<tr>').append(
              $('<td>')
                .attr('colspan', 2)
                .append(
                  $('<table>')
                    .append(
                      $('<thead>').append(
                        $('<tr>').append(
                          $('<th>')
                            .attr('colspan', 2)
                            .text(GetTranslation('strBarcodeModule'))
                        )
                      )
                    )
                    .append(
                      $('<tbody>')
                        .append(
                          $('<tr>')
                            .append(
                              $('<td>').text(GetTranslation('strBarcodeModuleType'))
                            )
                            .append(
                              $('<td>').append(
                                GetTranslation(
                                  getFromEnum(eBarCodeModuleTypeStrings, modType)
                                )
                              )
                            )
                        )
                        .append(
                          $('<tr>')
                            .append(
                              $('<td>').text(GetTranslation('strBarcodeModuleLength'))
                            )
                            .append($('<td>').append(modLength))
                        )
                        .append(
                          $('<tr>')
                            .append($('<td>').text(GetTranslation('strTextData')))
                            .append(
                              $('<td>')
                                .append(finalValue)
                                .append($('<br/>'))
                                .append($('<br/>'))
                                .append($('<span>').html(value))
                            )
                        )
                    )
                )
            )
          );
      });
  });

  $('#barcodeTable')
    .find('tbody')
    .find('tr')
    .each(function (key, element) {
      var color = '#ededed';
      if (key % 2 == 0) {
        color = '#fcfcfc';
      }
      $(element).css('background-color', color);
    });
}

function ParseLivenessData(data) {
  $xmlDoc = $($.parseXML(data));

  $xmlDoc.find('OneElement').each(function (key, element) {
    var text = GetTranslation(
      getFromEnum(
        eRPRM_SecurityFeatureType,
        element.getElementsByTagName('ElementType')[0].childNodes[0].nodeValue
      )
    );
    var imgString = $(element).find('Image Image')[0].textContent;
    var etalonString = $(element).find('EtalonImage EtalonImage')[0].textContent;

    var result = -1;

    if ($(element).children('Result').length > 0) {
      result = $(element).children('Result')[0].textContent;
    } else if ($(element).children('CheckResult').length > 0) {
      result = $(element).children('CheckResult')[0].textContent;
    }

    var indColor =
      result == eCheckResult.ch_Check_OK
        ? 'Green'
        : result == eCheckResult.ch_Check_Error
        ? 'Red'
        : 'Grey';

    var color = '#ededed';
    if (key % 2 == 0) {
      color = '#fcfcfc';
    }

    $('#faceComparisonTable')
      .find('tbody')
      .append(
        $('<tr>')
          .css('background-color', color)
          .append($('<td>').text(text))
          .append(
            $('<td>').append(
              $('<img>')
                .attr('src', 'Content/' + indColor + '.png')
                .addClass('validityInd')
            )
          )
      )
      .append(
        $('<tr>')
          .css('background-color', color)
          .append($('<td>').text(GetTranslation('strSimilarity')))
          .append($('<td>').text($(element).find('PercentValue')[0].textContent + '%'))
      )
      .append(
        $('<tr>')
          .css('background-color', color)
          .append($('<td>').text(GetTranslation('strImage')))
          .append(
            $('<td>').append($('<img>').attr('src', 'data:image/png;base64,' + imgString))
          )
      )
      .append(
        $('<tr>')
          .css('background-color', color)
          .append($('<td>').text(GetTranslation('strEtalonImage')))
          .append(
            $('<td>').append(
              $('<img>').attr('src', 'data:image/png;base64,' + etalonString)
            )
          )
      );
  });
}

function updateProgressBar(value) {
  var progressBarParent = $('#' + 'progress-bar');
  progressBarParent.css('visibility', 'visible');
  var progressBar = $('#progress-bar-percentage');
  progressBar.css('visibility', 'visible');
  var percentage = value + '%';
  progressBar.width(percentage);
  var progressBarText = progressBar.find('span');
  progressBarText.text(percentage);
}

function hideProgress() {
  var progressBar = $('#' + 'progress-bar-percentage');
  progressBar.css('visibility', 'hidden');
  var progressBarParent = $('#' + 'progress-bar');
  progressBarParent.css('visibility', 'hidden');
}

function GetRfidSummary() {
  GetPropertyValue('CheckStatusRFIDBAC', function (result) {
    if (result == null) $('#' + 'BAC').css('background-color', 'Grey');
    else if (result == true) $('#' + 'BAC').css('background-color', 'DarkGreen');
    else {
      $('#' + 'BAC').css('background-color', 'Red');
    }
  });

  GetPropertyValue('CheckStatusRFIDPACE', function (result) {
    if (result == null) $('#' + 'PACE').css('background-color', 'Grey');
    else if (result == true) $('#' + 'PACE').css('background-color', 'DarkGreen');
    else {
      $('#' + 'PACE').css('background-color', 'Red');
    }
  });

  GetPropertyValue('CheckStatusRFIDCA', function (result) {
    if (result == null) $('#' + 'CA').css('background-color', 'Grey');
    else if (result == true) $('#' + 'CA').css('background-color', 'DarkGreen');
    else {
      $('#' + 'CA').css('background-color', 'Red');
    }
  });

  GetPropertyValue('CheckStatusRFIDTA', function (result) {
    if (result == null) $('#' + 'TA').css('background-color', 'Grey');
    else if (result == true) $('#' + 'TA').css('background-color', 'DarkGreen');
    else {
      $('#' + 'TA').css('background-color', 'Red');
    }
  });

  GetPropertyValue('CheckStatusRFIDAA', function (result) {
    if (result == null) $('#' + 'AA').css('background-color', 'Grey');
    else if (result == true) $('#' + 'AA').css('background-color', 'DarkGreen');
    else {
      $('#' + 'AA').css('background-color', 'Red');
    }
  });

  GetPropertyValue('CheckStatusRFIDPA', function (result) {
    if (result == null) $('#' + 'PA').css('background-color', 'Grey');
    else if (result == true) $('#' + 'PA').css('background-color', 'DarkGreen');
    else {
      $('#' + 'PA').css('background-color', 'Red');
    }
  });
}

function GetStatuses() {
  GetPropertyValue('CheckStatusComplete', function (result) {
    if (result == null) $('#' + 'summmaryStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'summmaryStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'summmaryStat').attr('src', 'Content/Red.png');
    }
  });

  GetPropertyValue('CheckStatusMRZ', function (result) {
    if (result == null) $('#' + 'mrzStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'mrzStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'mrzStat').attr('src', 'Content/Red.png');
    }
  });

  GetPropertyValue('IsDocumentRecognized', function (result) {
    if (result == null) $('#' + 'docTypeStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'docTypeStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'docTypeStat').attr('src', 'Content/Red.png');
    }
  });

  GetPropertyValue('CheckStatusTextComparison', function (result) {
    if (result == null) $('#' + 'lexicalStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'lexicalStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'lexicalStat').attr('src', 'Content/Red.png');
    }
  });

  GetPropertyValue('CheckStatusSecurity', function (result) {
    if (result == null) $('#' + 'securityStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'securityStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'securityStat').attr('src', 'Content/Red.png');
    }
  });

  GetPropertyValue('CheckStatusRFID', function (result) {
    if (result == null) $('#' + 'rfidStat').attr('src', 'Content/Grey.png');
    else if (result == true) $('#' + 'rfidStat').attr('src', 'Content/Green.png');
    else {
      $('#' + 'rfidStat').attr('src', 'Content/Red.png');
    }
  });
}

function AppendAndProcessImages(files) {
  ClearResults(function () {
    var count = 0;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      var reader = new FileReader();
      reader.onload = function (e) {
        var ext = file.name.substring(file.name.lastIndexOf('.'), file.name.length);
        AppendImage(e.target.result, ext, 6, 0, function (data) {
          count++;
          if (count == files.length) {
            DoProcessImages(null);
          }
        });
      };
      reader.readAsDataURL(file);
    }
  });
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = 'block';
  evt.target.className += ' active';
}

function showDialog(src) {
  $('#imgDialog').find('img').attr('src', src);
  var width = $(window).width() * 0.7;
  var height = $(window).height() * 0.9;
  $('#imgDialog').dialog({
    modal: true,
    height: height,
    width: width,
  });
}

function bin2String(bytes) {
  var str = '';
  var split = bytes.split(' ');

  for (var i = 0; i < split.length; i++) {
    var b = split[i];
    if (b == 0) str += ' ';
    else {
      str += String.fromCharCode(b);
    }
  }
  return str;
}

function startFaceCapture() {
  SetPropertyValue('LiveCameraShowWindow', true, function () {
    DoLiveFaceCapture();
  });
}
// }
