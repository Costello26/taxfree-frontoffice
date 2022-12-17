import { hubConnection } from 'signalr-no-jquery';
import RegulaApiService from './regula.api.service';

let host = 'http://localhost:5000';
let aType = null;

const connection = hubConnection(`${host}/Regula.SDK.Api`);
const hubProxy = connection.createHubProxy('EventsHub');

export const regulaEventListener = async () => {
  const response = await RegulaApiService.hostHealthCheck();
  console.log(response);
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
    //console.log('Processing finished!');
    const name = await RegulaApiService.GetTextFieldByType(25);
    const serialNum = await RegulaApiService.GetTextFieldByType(2);
    console.log(name, serialNum);
  });

  hubProxy.on('OnProcessingStarted', function () {
    console.log('Processing started...');
  });

  hubProxy.on('OnResultReady', function (AType) {
    aType = AType;
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
