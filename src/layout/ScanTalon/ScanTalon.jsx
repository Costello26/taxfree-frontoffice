import React, { useState } from 'react';
//import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanTalon.module.scss';
import Modal from '../../components/Modal/Modal';
import { Box, Typography } from '@mui/material';
import CheckBox from '../../assets/Png/CheckBox.png';
import { UserBadge } from '../../components/UserBadge/UserBadge';
import ScanTalon from '../../assets/Png/scan-ticket.png'
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const Index = () => {
  const { selectedLang } = useSelector(state => state.lang)
  const [modalActive ] = useState(false) //setModalActive
  return (
    <div>
      <div className="container">
        {/* <AppBar /> */}
        <UserBadge step={3}/>
        <div className={classes['card__content']}>
          <RegulaInfo
            heading={globalLocales.ticketScan.heading[selectedLang]}
            textUZ="Iltimos, parvoz taloningizni ko`rsating"
            textRU="Пожалуйста, предъявите ваш посадочный талон"
            imgSrc={ScanTalon}
          />
          <div className={classes['card__modal']}>
          
              <Modal state={modalActive}>
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '540px',
                    height: '500px',
                    background: '#FFFFFF',
                    borderRadius: '40px',
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={CheckBox}
                    alt="CheckBox"
                    style={{ width: '150px', height: '150px' }}
                  />
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 600,
                      textAlign: 'center',
                      mt: '55px',
                    }}
                  >
                    Shaxsga doir ma`lumotlar tasdiqlandi!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '24px',
                      fontWeight: 600,
                      textAlign: 'center',
                      mt: '35px',
                    }}
                  >
                    Личные данные подтверждены!
                  </Typography>
                </Box>
              </Modal>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
