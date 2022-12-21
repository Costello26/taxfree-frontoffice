import React, { useEffect } from 'react';
//import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { regulaEventListener } from '../../service/regulaListener';
import { UserBadge } from '../../components/UserBadge/UserBadge';
import { globalLocales } from '../../assets/locales';
import PassportScan from '../../assets/Png/passport-scan.png'

const ScanPassport = () => {
  const navigate = useNavigate();
  const { selectedLang } = useSelector((state) => state.lang)
  const userId = useSelector((state) => state.passport.userId);
  const hasPassportSaved = useSelector((state) => state.auth.hasPassportSaved);
  useEffect(() => {
    console.log(userId);
    // if (!userId) {
    //   navigate('/login');
    // }
    const initRegula = async () => {
      await regulaEventListener(selectedLang);
    };
    initRegula();
  }, [navigate, userId]);
  useEffect(() => {
    if (hasPassportSaved) {
      navigate('/product-formalization');
    }
  }, [navigate, hasPassportSaved]);
  return (
    <div className="container">
      {/* <AppBar /> */}
      <UserBadge/>
      <div className={classes['card__content']}>
        <RegulaInfo
          heading={globalLocales.passportScan.heading[selectedLang]}
          textUZ={globalLocales.passportScan.mainHeading[1]}
          textRU={globalLocales.passportScan.mainHeading[2]}
          imgSrc={PassportScan}
        />
      </div>
    </div>
  );
};

export default ScanPassport;
