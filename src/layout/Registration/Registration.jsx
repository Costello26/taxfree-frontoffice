import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { passportActions } from '../../store/passport';

const Registration = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  // const dispatch = useDispatch();
  // const qr_code = useSelector((state) => state.qrcode);
  // console.log(qr_code);
  const sendPhoneHandler = (phoneNumber) => {
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
    navigate('/scan-passport');
  };
  useEffect(() => {
    // props.stompClient.publish({
    //   destination: '/tax-free/set-connection',
    //   body: 'something',
    // });
    // props.stompClient.subscribe('/topic/qr-information', (msg) => {
    //   const receivedData = JSON.parse(msg.body);
    //   const qr_code = receivedData.data['qr_code'];
    //   setQrCode(qr_code);
    // });
    // props.stompClient.publish({
    //   destination: '/tax-free/by-phone-number',
    //   body: phoneNumber,
    // });
    // props.stompClient.subscribe('/topic/get-phone-number-response', (message) => {
    //   console.log(message.body);
    //   if (message.body) {
    //     navigate('/scan-passport');
    //   }
    // });
    // props.stompClient.onError = (frame) => {
    //   console.log(frame.headers['message']);
    //   console.log(frame);
    // };
    // props.stompClient.onWebSocketError = (err) => {
    //   console.log(err);
    // };
    // props.stompClient.onStompError = (err) => {
    //   console.log('Stomp error', err);
    // };
  }, []);
  // setInterval(() => {
  //   fetch(
  //     `http://10.255.53.91:14069/tax-free-api/user/qr/check-state/${res.data.qr_code}`,
  //     {
  //       method: 'POST',
  //     }
  //   ).then((res) => console.log(res));
  // }, 3000);
  useEffect(() => {
    const fetchData = async () => {
      try {
        return await fetch(
          `https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/check-state/${props.qrCode}`,
          {
            method: 'POST',
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(async () => {
      const res = await fetchData();
      const user = await res.json();
      if (user.success) {
        dispatch(passportActions.getUserId(user.data.userId));
        localStorage.setItem("userId", user.data.userId)
        navigate('/scan-passport');
      }
    }, 3000);

    fetchData();

    return () => clearInterval(id);
  }, [props.qrCode]);

  return (
    <div className="container">
      <AppBar />
      <ScanCheck qrCode={props.qrCode} onContinue={sendPhoneHandler} />
    </div>
  );
};

export default React.memo(Registration);
