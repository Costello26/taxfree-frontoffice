import React, { useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { regulaEventListener } from '../../service/regulaListener';

const ScanPassport = (props) => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.passport.userId);
  const hasPassportSaved = useSelector((state) => state.auth.hasPassportSaved);
  useEffect(() => {
    console.log(userId);
    if (!userId) {
      navigate('/login');
    }
    const initRegula = async () => {
      await regulaEventListener();
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
      <AppBar />
      <div className={classes['card__content']}>
        <RegulaInfo
          textUZ="Shaxsingizni tasdiqlovchi xujjatni ochiq holda skanerlash qurilmasiga qo`ying"
          textRU="Положите документ, подтверждающий вашу личность в открытом виде  на устройство сканирования"
          imgSrc={sloy}
        />
      </div>
    </div>
  );
};

export default ScanPassport;
