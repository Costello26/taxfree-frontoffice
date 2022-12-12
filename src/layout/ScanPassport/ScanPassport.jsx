import React, { useEffect } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { passportActions } from '../../store/passport';

const ScanPassport = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    props.stompClient.subscribe('/topic/passport-response', (msg) => {
      const data = JSON.parse(msg.body);
      if (data.first_name && data.last_name && data.passport_image) {
        dispatch(
          passportActions.receive({
            firstName: data.first_name,
            lastName: data.last_name,
            passportImage: data.passport_image,
            passportDate: data.passport_date,
            passportJSHR: data.passport_JSHR,
          })
        );
        navigate('/product-formalization');
      }
    });
  }, []);
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
