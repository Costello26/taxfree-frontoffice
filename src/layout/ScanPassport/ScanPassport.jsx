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
  useEffect(()=>{
   const status =  setInterval(()=>{
      console.log(localStorage.getItem('status'));
      if(localStorage.getItem('status')==='true'){
       navigate('/product-formalization')
      }
    }, 1000)

    return ()=>{clearInterval(status)}
  }, [])
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
