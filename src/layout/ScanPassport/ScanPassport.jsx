import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';

const ScanPassport = (props) => {
  const navigate = useNavigate();
  const redirectToUsersPage = () => {
    navigate('/product-formalization');
  };
  props.stompClient.onConnect = () => {
    props.stompClient.subscribe('/topic/passport-response', (msg) => {
      console.log(msg);
    });
  };

  return (
    <div className="container">
      <AppBar />
      <div className={classes['card__content']}>
        <RegulaInfo
          textUZ="Shaxsingizni tasdiqlovchi xujjatni ochiq holda skanerlash qurilmasiga qo`ying"
          textRU="Положите документ, подтверждающий вашу личность в открытом виде  на устройство сканирования"
          imgSrc={sloy}
          onProcessUserData={redirectToUsersPage}
        />
      </div>
    </div>
  );
};

export default ScanPassport;
