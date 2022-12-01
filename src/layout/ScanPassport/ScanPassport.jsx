import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png'

const ScanPassport = () => {
  return (
    <div className="container">
      <AppBar />
      <div className={classes['card__content']}>
        <RegulaInfo 
        state={{
          textUZ:"Shaxsingizni tasdiqlovchi xujjatni ochiq holda skanerlash qurilmasiga qo`ying",
          textRU:"Положите документ, подтверждающий вашу личность в открытом виде  на устройство сканирования",
          imgSrc: sloy
          }}
        />
      </div>
    </div>
  );
};

export default ScanPassport;
