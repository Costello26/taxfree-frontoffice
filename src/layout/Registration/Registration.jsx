import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import * as StompJs from '@stomp/stompjs';

const SOCKET_URL = 'ws://10.255.53.91:14069/tax-free-api/websocket-server';

const Registration = () => {
  const stompClient = new StompJs.Client({
    brokerURL: SOCKET_URL,
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });
  stompClient.onConnect = (frame) => {
    console.log('frame', frame);
    stompClient.subscribe('/set-connection', (message) => {
      console.log(message);
    });
    stompClient.subscribe('/topic/qr-information', (msg) => {
      console.log(msg);
    });
  };
  stompClient.onError = (frame) => {
    console.log(frame.headers['message']);
    console.log(frame);
  };
  stompClient.onWebSocketError = (err) => {
    console.log(err);
  };
  stompClient.onStompError = (err) => {
    console.log('Stomp error', err);
  };
  stompClient.activate();

  return (
    <div className="container">
      <AppBar />
      <ScanCheck />
    </div>
  );
};

export default Registration;
