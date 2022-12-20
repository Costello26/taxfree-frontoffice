import jQuery from 'jquery';

var serviceUrl;

/*=====/Settings=====*/

function GetPropertyValue(propertyName, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/GetPropertyValue?propertyName=' + propertyName,
    type: 'GET',
    contentType: 'application/json;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function SetPropertyValue(propertyName, value) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/SetPropertyValue?propertyName=' + propertyName,
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(value),
    async: false,
  });
}

/*=====/Methods=====*/

function AppendImage(AImage, AFormat, ALightType, APageIndex) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/AppendImage?AFormat=' +
      AFormat +
      '&ALightType=' +
      ALightType +
      '&APageIndex=' +
      APageIndex,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    data: JSON.stringify(AImage),
  });
}

function AppendImageFromFile(AFileName, ALightType, APageIndex) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/AppendImageFromFile?AFileName=' +
      AFileName +
      '&ALightType=' +
      ALightType +
      '&APageIndex=' +
      APageIndex,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function BatteryStatusByIdx(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/BatteryStatusByIdx?index=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function Calibrate() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Calibrate',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function CancelOpticalOperation() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CancelOpticalOperation',
    type: 'POSt',
    contentType: 'text/xml;charset=utf-8',
  });
}

function CheckReaderImageLight(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderImageLight?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckReaderImagePageIndex(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckReaderImagePageIndex?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckReaderResult(type, index, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/CheckReaderResult?AType=' +
      type +
      '&AIdx=' +
      index +
      '&AOutput=' +
      output +
      '&AParam=' +
      param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckReaderResultFromList(container, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/CheckReaderResultFromList?AContainer=' +
      container +
      '&AOutput=' +
      output +
      '&AParam=' +
      param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckReaderResultXML(type, index, output, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/CheckReaderResultXML?AType=' +
      type +
      '&AIdx=' +
      index +
      '&AOutput=' +
      output,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckRFIDResult(type, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/CheckRFIDResult?AType=' +
      type +
      '&AOutput=' +
      output +
      '&AParam=' +
      param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckRFIDResultFromList(container, output, param, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/CheckRFIDResultFromList?AContainer=' +
      container +
      '&AOutput=' +
      output +
      '&AParam=' +
      param,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckRFIDResultXML(type, output, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckRFIDResultXML?AType=' + type + '&AOutput=' + output,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function CheckUpdates() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/CheckUpdates',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function ClearResults() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ClearResults',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function Connect() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Connect',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function Disconnect() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Disconnect',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function DoProcessImage(AFilename) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/DoProcessImage?AFilename=' + AFilename,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function DoProcessImages(AFolder) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/DoProcessImages?AFolder=' + AFolder,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function get_AvailableDevices(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableDevices?Index=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function get_AvailableGraphicFormats(Index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableGraphicFormats?Index=' + Index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      successFunction(data);
    },
  });
}

function get_AvailableLanguages(Index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/get_AvailableLanguages?Index=' + Index,
    type: '',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      successFunction(data);
    },
  });
}

function GetBarcodeModuleCount(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetBarcodeModuleCount',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetBarcodeModuleDataByIdx(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetBarcodeModuleDataByIdx?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetGraphicFieldByTypeAndSource(type, source, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/GetGraphicFieldByTypeAndSource?AType=' +
      type +
      '&ASourceType=' +
      source,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetImages(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetImages',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderBitmapImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderBitmapImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderBitmapImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderBitmapImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderBitmapImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/GetReaderBitmapImageByLightIndexAndPageIndex?ALight=' +
      light +
      '&APageIndex=' +
      page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderEOSBitmapImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderEOSBitmapImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderEOSBitmapImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderEOSBitmapImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderEOSBitmapImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/GetReaderEOSBitmapImageByLightIndexAndPageIndex?ALight=' +
      light +
      '&APageIndex=' +
      page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderFileImage(index, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderFileImage?AIdx=' + index,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderFileImageByLightIndex(light, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderFileImageByLightIndex?ALight=' + light,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderFileImageByLightIndexAndPageIndex(light, page, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/GetReaderFileImageByLightIndexAndPageIndex?ALight=' +
      light +
      '&APageIndex=' +
      page,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderGraphicsBitmapByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderGraphicsBitmapByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetReaderGraphicsFileImageByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetReaderGraphicsFileImageByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetRFIDDGRawData(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDDGRawData?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetRFIDGraphicsBitmapByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDGraphicsBitmapByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetRFIDGraphicsFileImageByFieldType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetRFIDGraphicsFileImageByFieldType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetSnapshot(light, mode, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetSnapshot?ALight=' + light + '&AMode=' + mode,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetTextFieldByType(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetTextFieldByType?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetTextFieldByTypeAndLCID(type, lcid, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl + '/Methods/GetTextFieldByTypeAndLCID?AType=' + type + '&ALCID=' + lcid,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function GetTextFieldByTypeAndSource(
  type,
  source,
  originalSource,
  lcid,
  successFunction
) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/GetTextFieldByTypeAndSource?AType=' +
      type +
      '&ASourceType=' +
      source +
      '&AOriginalSource=' +
      originalSource +
      '&ALCID=' +
      lcid,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function Hide() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Hide',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function HideResultPopup() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/HideResultPopup',
    type: '',
    contentType: 'text/xml;charset=utf-8',
  });
}

function IsReaderResultTypeAvailable(type, successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/IsReaderResultTypeAvailable?AType=' + type,
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function LED(color, rate, index) {
  jQuery.support.cors = true;
  $.ajax({
    url:
      serviceUrl +
      '/Methods/LED?AColor=' +
      color +
      '&ABlinkRate=' +
      rate +
      '&AIndex=' +
      index,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function PlaySound(ATimes) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/PlaySound?ATimes=' + ATimes,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function RefreshPACertStore() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RefreshPACertStore',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function ReportCurrentSampleIssue() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ReportCurrentSampleIssue',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function RFIDCancelReading() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RFIDCancelReading',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function SetActiveLights(activeLights) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/SetActiveLights?ALights=' + activeLights,
    type: 'POST',
  });
}

function GetActiveLights(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetActiveLights',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function SaveConfig(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/SaveConfig',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
    success: successFunction,
  });
}

function Show() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/Show',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function WaitAndReadRFID() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/WaitAndReadRFID',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

/*=====/Methods (SPECIAL)=====*/

function ShutdownComputer(doRestart) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/ShutdownComputer?restart=' + doRestart,
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function RestartSdk() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/RestartSdk',
    type: 'POST',
    contentType: 'text/xml;charset=utf-8',
  });
}

function GetServiceVersion(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetServiceVersion',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      successFunction(data);
    },
  });
}

function GetSystemDateTime(successFunction) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Methods/GetSystemDateTime',
    type: 'GET',
    contentType: 'text/xml;charset=utf-8',
    success: function (data) {
      if (successFunction != null) successFunction(data);
    },
  });
}

function SetSystemDateTime(value) {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Settings/SetSystemDateTime',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(value),
  });
}

function NotifyRfidRequestHandled() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Events/NotifyRfidRequestHandled',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
  });
}

function NotifyCalibrationHandled() {
  jQuery.support.cors = true;
  $.ajax({
    url: serviceUrl + '/Events/NotifyCalibrationHandled',
    type: 'POST',
    contentType: 'application/json; charset=utf-8',
  });
}

/*=====EVENTS=====*/

var OnNotificationOpticalCallback;
var OnImageReadyCallback;
var OnNotificationRFIDCallback;
var OnProcessingFinishedCallback;
var OnProcessingStartedCallback;
var OnResultReadyCallback;
var OnResultReadyXMLCallback;
var OnRFIDRequestCallback;
var OnSystemNotificationCallback;

function initRegulaReader(url) {
  serviceUrl = url;

  var signalRHubsScript = document.createElement('script');
  signalRHubsScript.setAttribute('src', serviceUrl + 'notifications/signalr/hubs');
  document.head.appendChild(signalRHubsScript);

  jQuery.support.cors = true;
  var connection = $.hubConnection(serviceUrl + 'notifications');
  var hubProxy = connection.createHubProxy('EventsHub');

  hubProxy.on('OnNotificationOptical', function (ACode, AValue) {
    if (OnNotificationOpticalCallback != null)
      OnNotificationOpticalCallback(ACode, AValue);
  });

  hubProxy.on('OnImageReady', function (ALight, APageIndex) {
    if (OnImageReadyCallback != null) OnImageReadyCallback(ALight, APageIndex);
  });

  hubProxy.on('OnNotificationRFID', function (ACode, AValue) {
    if (OnNotificationRFIDCallback != null) OnNotificationRFIDCallback(ACode, AValue);
  });

  hubProxy.on('OnProcessingFinished', function () {
    if (OnProcessingFinishedCallback != null) OnProcessingFinishedCallback();
  });

  hubProxy.on('OnProcessingStarted', function () {
    if (OnProcessingStartedCallback != null) OnProcessingStartedCallback();
  });

  hubProxy.on('OnResultReady', function (AType) {
    if (OnResultReadyCallback != null) OnResultReadyCallback(AType);
  });

  hubProxy.on('OnResultReadyXML', function (AType, ResultXML) {
    if (OnResultReadyXMLCallback != null) OnResultReadyXMLCallback(AType, ResultXML);
  });

  hubProxy.on('OnRFIDRequest', function (RequestXML) {
    if (OnRFIDRequestCallback != null) OnRFIDRequestCallback(RequestXML);

    NotifyRfidRequestHandled();
  });

  hubProxy.on('OnSystemNotification', function (code, value) {
    if (OnSystemNotificationCallback != null) OnSystemNotificationCallback(code, value);
  });

  connection
    .start()
    .done(function () {})
    .fail(function () {
      alert('SignalR not initialized!');
    });
}

/*=====Utilities=====*/

function getFromEnum(set, value) {
  for (var k in set) {
    if (set.hasOwnProperty(k)) {
      if (set[k] == value) {
        return k;
      }
    }
  }
  return undefined;
}

function getDictionary(language) {
  if (Strings.hasOwnProperty(language)) {
    return Strings[language];
  }
}

function GetTranslation(value) {
  var cookieLang = $.cookie('language');
  var dictionary = getDictionary(cookieLang);
  if (dictionary == null) dictionary = Strings.English;
  var result = dictionary[value];
  if (result != null) return result;
  else return value;
}

function setLang(language) {
  var dictionary = getDictionary(language);
  if (dictionary == null) {
    dictionary = Strings.English;
    language = 'English';
  }

  $('#lang').val(language);
  $.cookie('language', language);
  $('[data-translate]').each(function () {
    if ('value' in this) {
      $(this).val(function () {
        var key = $(this).data('translate');
        if (dictionary.hasOwnProperty(key)) {
          return dictionary[key];
        }
      });
    } else {
      $(this).text(function () {
        var key = $(this).data('translate');
        if (dictionary.hasOwnProperty(key)) {
          return dictionary[key];
        }
      });
    }
  });
}
