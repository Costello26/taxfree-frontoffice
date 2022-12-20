import React, { useEffect } from 'react';
//import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { regulaEventListener } from '../../service/regulaListener';

const ScanPassport = (props) => {
  const navigate = useNavigate();
  const { qrCode } = useSelector((state) => state.auth);
  useEffect(() => {
    const initRegula = async () => {
      const passportResult = await regulaEventListener();
      console.log(passportResult);
    };
    initRegula();
    // const fetchData = async () => {
    //   try {
    //     if (localStorage.getItem('status')) {
    //       navigate('/product-formalization');
    //     }
    //     return await fetch(
    //       `https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/check-state/${qrCode}`,
    //       {
    //         method: 'POST',
    //       }
    //     );
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // const id = setInterval(async () => {
    //   const res = await fetchData();
    //   const user = await res.json();
    //   if (user.success && user.code === 2) {
    //     console.log(user);
    //     navigate('/product-formalization');
    //   }
    // }, 3000);

    // return () => clearInterval(id);
  }, [navigate, qrCode]);
  return (
    <div className="container">
      {/* <AppBar /> */}
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
