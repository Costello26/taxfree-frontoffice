import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Box, Typography } from '@mui/material';
import { passportActions } from '../../store/passport';
const ScanPassport = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const select = useSelector(state => state)
  // const [modalActive , setModalActive] = useState(false)
  useEffect(() => {
    // props.stompClient.subscribe('/topic/passport-response', (msg) => {
    //   const data = JSON.parse(msg.body);
    //   console.log(msg);
    //   if (data.first_name && data.last_name && data.passport_image) {
    //     //
    //   }
    // });
    const data = JSON.parse(localStorage.getItem("userInfo"))
    console.log(data.firstName);
  

    dispatch(
      passportActions.receive({
              firstName: data.firstName,
              lastName: data.lastName,
              passportImage: data.passportImage,
              passportDate: data.passportDate,
              passportJSHR: data.passportJSHR,
            })
          );
          // navigate('/product-formalization');
    
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
      {/* <Modal state={modalActive}></Modal> */}
    </div>
  );
};

export default ScanPassport;
