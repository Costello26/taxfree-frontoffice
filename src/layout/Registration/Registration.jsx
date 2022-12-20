import React, { useEffect } from 'react';
//import AppBar from '../../components/AppBar/AppBar';
import { NotificationManager } from 'react-notifications';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { passportActions } from '../../store/passport';
import { authActions } from '../../store/auth';



const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { qrCode } = useSelector((state) => state.auth);

  const sendPhoneHandler = async (phoneNumber) => {
    if (phoneNumber.length === 0) return;
    if (phoneNumber.length < 12) return NotificationManager.error("Введено недопустимое значение");
    try {
      const response = await fetch(
        'https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/find-user/by-phone?' +
          new URLSearchParams({
            phone: phoneNumber,
            qr_code: qrCode,
          })
      );
      if (response.status === 200) {
        const data = await response.json();
        dispatch(passportActions.setUserId(data.data.userId));
        navigate('/scan-passport');
      }
      if (response.status === 403) {
        NotificationManager.error("Noto'g'ri raqam")
        return;
      }
    } catch (err) {
      NotificationManager.error("Xatolik yuz berdi")
      console.log('Err', err);
    }
  };

  useEffect(() => {
    let qrCode = null;
    fetch('https://mobile.soliq.uz/my3-api/tax-free-api/user/get/qr-information')
      .then((res) => res.json())
      .then((res) => {
        qrCode = res.data.qr_code;
        dispatch(authActions.setQrCode(res.data.qr_code));
      })
      .catch((err) => {
        console.log(err);
      });
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/check-state/${qrCode}`,
          {
            method: 'POST',
          }
        );
        if (res.status === 403) {
          throw new Error('error');
        }
        return await res.json();
      } catch (error) {
        console.log(error);
      }
    };
    const id = setInterval(async () => {
      const user = await fetchData();
      if (user.success && user.code === 1) {
        dispatch(passportActions.setUserId(user.data.userId));
        navigate('/scan-passport');
      } else if (user.success && user.code === 2) {
        console.log('User', user.data.fullName);
        dispatch(passportActions.receive(user.data));
        dispatch(passportActions.setUserId(user.data.userId));
        navigate('/product-formalization');
      }
    }, 3000);

    return () => clearInterval(id);
  }, [dispatch, navigate]);

  return (
    <div className="container">
      {/* <AppBar /> */}
      <ScanCheck onContinue={sendPhoneHandler} />
    </div>
  );
};

export default React.memo(Registration);
