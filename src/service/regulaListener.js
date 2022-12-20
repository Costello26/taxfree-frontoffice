import { hubConnection } from 'signalr-no-jquery';
import RegulaApiService from './regula.api.service';
import store from '../store';
import { passportActions } from '../store/passport';
import ApiService from './fetch.api.service';
import { NotificationManager } from 'react-notifications';

let host = 'http://localhost:5000';

const connection = hubConnection(`${host}/Regula.SDK.Api`);
const hubProxy = connection.createHubProxy('EventsHub');

export const regulaEventListener = async () => {
  const response = await RegulaApiService.hostHealthCheck();
  if (!response.ok) {
    console.log('Regula host is not available!');
    return;
  }

  // set up event listeners

  hubProxy.on('OnNotificationOptical', function (ACode, AValue) {
    //console.log('NotificationOptical');
  });

  hubProxy.on('OnImageReady', function (ALight, APageIndex) {
    // console.log('Image ready');
  });

  hubProxy.on('OnNotificationRFID', function (ACode, AValue) {
    // console.log('Notification RFID');
  });

  hubProxy.on('OnProcessingFinished', async function () {
    NotificationManager.info('Обработка документа завершена успешно')
    //console.log('Processing finished!');
    const phoneNumber = store.getState().passport.phone;
    const userId = store.getState().passport.userId;
    const name = await RegulaApiService.GetTextFieldByType(25);
    const serialNum = await RegulaApiService.GetTextFieldByType(2);
    const personalNumber = await RegulaApiService.GetTextFieldByType(7);
    const dataOfIssue = await RegulaApiService.GetTextFieldByType(4);
    const image = await RegulaApiService.GetImage(201);
    let passportImage = 'data:image/png;base64,';
    passportImage += image;
    const personalData = {
      passportNumber: serialNum,
      fullName: name,
      passportJSHR: personalNumber,
      passportImage: passportImage,
      passportDate: dataOfIssue,
      phone: phoneNumber,
      userId,
    };
    store.dispatch(passportActions.setPersonalData(personalData));
    const res = await ApiService.savePassportData(personalData);
    console.log(res);
  });

  hubProxy.on('OnProcessingStarted', function () {
    NotificationManager.info('Начата обработка документа')
    console.log('Processing started...');
  });

  hubProxy.on('OnResultReady', function (AType) {
    console.log('Result ready');
  });

  hubProxy.on('OnResultReadyXML', function (AType, ResultXML) {
    //console.log('Result ready XML');
  });

  hubProxy.on('OnRFIDRequest', function (RequestXML) {
    //console.log('RFID Request');
  });

  hubProxy.on('OnSystemNotification', function (code, value) {
    //console.log('systemNotification');
  });

  hubProxy.on('OnExtPortraitRequest', function () {
    //console.log('portrait request');
  });

  connection.logging = true;

  // connect
  connection
    .start({ transport: 'longPolling' })
    .done(function () {
      console.log('Now connected, connection ID=' + connection.id);
    })
    .fail(function () {
      console.log('Could not connect');
    });
};
