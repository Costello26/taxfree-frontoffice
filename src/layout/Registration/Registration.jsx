import React, { useEffect } from 'react';
//import AppBar from '../../components/AppBar/AppBar';
import { NotificationManager } from 'react-notifications';
import ScanCheck from '../../components/ScanCheck/ScanCheck';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { passportActions } from '../../store/passport';
import { authActions } from '../../store/auth';
import ApiService from '../../service/soliq.api.service';
import { globalLocales } from '../../assets/locales';
//import { UserBadge } from '../../components/UserBadge/UserBadge';


const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedLang } = useSelector((state) => state.lang)
  const { qrCode } = useSelector((state) => state.auth);

  const sendPhoneHandler = async (phoneNumber) => {

    if(phoneNumber.length < 12) return NotificationManager.error(globalLocales.notifications.invalidNumber[selectedLang])

    dispatch(passportActions.setPhoneNumber(phoneNumber));
    const res = await ApiService.findUserByPhone(phoneNumber, qrCode);
    console.log(res)
    if (res.success && res.code === 1) {
      dispatch(passportActions.setUserId(res.data.userId));
      navigate('/scan-passport');
    } else if (res.success && res.code === 2) {
      console.log(res);
      dispatch(passportActions.setPersonalData(res.data));
      navigate('/product-formalization');
    } else {
      return NotificationManager.error(globalLocales.notifications.universalError[selectedLang])
    }
  };

  useEffect(() => {
    let qr_code = null;
    const getqrInfo = async () => {
      const data = await ApiService.getQR();
      qr_code = data.data.qr_code;
      dispatch(authActions.setQrCode(qr_code));
    };
    getqrInfo();
    const fetchData = async () => {
      return await ApiService.checkState(qr_code);
    };
    const id = setInterval(async () => {
      const user = await fetchData();
      if (user.success && user.code === 1) {
        dispatch(passportActions.setUserId(user.data.userId));
        dispatch(authActions.login());
        navigate('/scan-passport');
      } else if (user.success && user.code === 2) {
        dispatch(passportActions.setPersonalData(user.data));
        navigate('/product-formalization');
      }
    }, 3000);

    return () => clearInterval(id);
  }, [dispatch, navigate]);

  return (
    <>
    <div className="container">
      {/* <AppBar /> */}
      {/* <UserBadge/> */}
      <ScanCheck onContinue={sendPhoneHandler} />
    </div>
    </>
  );
};

export default Registration;
