import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import SockJS from 'sockjs-client';
import * as StompJs from '@stomp/stompjs';
import Stomp from 'stompjs';

const SOCKET_URL = 'http://10.255.53.91:14069/tax-free-api/websocket-server';

const Registration = () => {
  let sock = new SockJS(SOCKET_URL);
  const client = Stomp.over(sock);
  const header = {
    Authorization: 'Bearer e4e4029f8479d5da0184d18c940b02db',
  };
  client.connect(header, () => {
    console.log('Start');
  });
  // const stompClient = new StompJs.Client({
  //   brokerURL: 'ws://10.255.53.91:14069/tax-free-api/websocket-server',
  //   connectHeaders: {
  //     Authorization: 'Bearer e4e4029f8479d5da0184cd75777c02b7',
  //   },
  //   debug: function (str) {
  //     console.log(str);
  //   },
  //   reconnectDelay: 10000,
  //   heartbeatIncoming: 4000,
  //   heartbeatOutgoing: 4000,
  // });
  // stompClient.beforeConnect = () => {
  //   stompClient.connectHeaders = {
  //     Authorization: 'Bearer e4e4029f8479d5da0184cd75777c02b7',
  //   };
  // };
  // stompClient.onConnect = (frame) => {
  //   console.log('here');
  // };
  // stompClient.onError = (frame) => {
  //   console.log(frame.headers['message']);
  //   console.log(frame);
  // };
  // stompClient.onWebSocketError = (err) => {
  //   console.log(err);
  // };
  // stompClient.onStompError = (err) => {
  //   console.log('Stomp error', err);
  // };
  // stompClient.activate();

  sock.onopen = function () {
    console.log('open');
    sock.send('test');
  };

  sock.onmessage = function (e) {
    console.log('message', e.data);
    sock.close();
  };

  sock.onclose = function () {
    console.log('close');
  };

  sock.onerror = function (e) {
    console.log(e);
  };
  return (
    <div className="container">
      <AppBar />
      <ScanCheck />
    </div>
  );
};

export default Registration;
