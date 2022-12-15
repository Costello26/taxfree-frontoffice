import React, { useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { passportActions } from '../../store/passport';
import { authActions } from '../../store/auth';

const Registration = (props) => {
  let qrCode = props.qrCode;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sendPhoneHandler = async (phoneNumber) => {
    try {
      const response = await fetch(
        'https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/find-user/by-phone?' +
          new URLSearchParams({
            phone: phoneNumber,
            qr_code: qrCode,
          })
      );
      if (response.status === 200) {
        dispatch(authActions.login());
        navigate('/scan-passport');
      }
      if (response.status === 403) {
        console.log("Noto'g'ri raqam");
      }
    } catch (err) {
      console.log('Err', err);
    }
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
      } catch (error) {
        console.log(error);
      }
    };
    const id = setInterval(async () => {
      const res = await fetchData();
      const user = await res.json();
      if (user.success && user.code === 1) {
        dispatch(passportActions.getUserId(user.data.userId));
        localStorage.setItem('userId', user.data.userId);
        dispatch(authActions.login());
        navigate('/scan-passport');
      } else if (user.success && user.code === 2) {
        console.log(user);
        navigate('/product-formalization');
      }
    }, 3000);

    return () => clearInterval(id);
  }, [qrCode, dispatch, navigate]);

  return (
    <div className="container">
      <AppBar />
      <ScanCheck qrCode={props.qrCode} onContinue={sendPhoneHandler} />
    </div>
  );
};

export default React.memo(Registration);
