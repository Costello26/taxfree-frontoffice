import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { passportActions } from '../../store/passport';
import axios from 'axios';

const Registration = (props) => {
  let qrCode = props.qrCode
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const sendPhoneHandler = (phoneNumber) => {
    console.log(phoneNumber);
    setPhoneNumber(phoneNumber);
    navigate('/scan-passport');
  };

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        return await fetch(
          `https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/check-state/${qrCode}`,
          {
            method: 'POST',
          }
        );
      }
      catch (error) {
        console.log(error);
      }
    };

    const id = setInterval(async () => {
      const res = await fetchData();
      const user = await res.json();
      console.log(user);
      if (user.success) {
        dispatch(passportActions.getUserId(user.data.userId));
        localStorage.setItem("userId", user.data.userId)
        navigate('/scan-passport');
      }
    }, 3000);

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
