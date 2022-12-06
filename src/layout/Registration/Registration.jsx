import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';

const Registration = (props) => {
  const navigate = useNavigate();
  const [qrCode, setQrCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const sendPhoneHandler = (phoneNumber) => {
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
    navigate('/scan-passport');
  };
  useEffect(() => {
    // const stompClient = new StompJs.Client({
    //   brokerURL: SOCKET_URL,
    //   debug: function (str) {
    //     console.log(str);
    //   },
    //   reconnectDelay: 5000,
    //   heartbeatIncoming: 4000,
    //   heartbeatOutgoing: 4000,
    // });
    props.stompClient.onConnect = (frame) => {
      props.stompClient.publish({
        destination: '/tax-free/set-connection',
        body: 'something',
      });
      props.stompClient.subscribe('/topic/qr-information', (msg) => {
        const receivedData = JSON.parse(msg.body);
        const qr_code = receivedData.data['qr_code'];
        // console.log(qr_code);
        setQrCode(qr_code);
      });

      props.stompClient.publish({
        destination: '/tax-free/by-phone-number',
        body: phoneNumber,
      });
      props.stompClient.subscribe('/topic/get-phone-number-response', (message) => {
        console.log(message.body);
        if (message.body) {
          navigate('/scan-passport');
        }
      });
      props.stompClient.subscribe('/topic/passport-response', (msg) => {
        console.log(JSON.parse(msg.body));
      });
      props.stompClient.publish({
        destination: '/tax-free-api/passport/save',
        body: 'something',
      });
    };
    props.stompClient.onError = (frame) => {
      console.log(frame.headers['message']);
      console.log(frame);
    };
    props.stompClient.onWebSocketError = (err) => {
      console.log(err);
    };
    props.stompClient.onStompError = (err) => {
      console.log('Stomp error', err);
    };
    // stompClient.activate();
  }, []);
  return (
    <div className="container">
      <AppBar />
      <ScanCheck qrCode={qrCode} onContinue={sendPhoneHandler} />
    </div>
  );
};

export default React.memo(Registration);
