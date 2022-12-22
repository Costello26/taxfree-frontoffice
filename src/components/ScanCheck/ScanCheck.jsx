import React, { useState } from 'react';
import { Box, Container, Avatar, Typography, TextField, Button } from '@mui/material';
import ScanBtn from '../../assets/svg/scanme.svg';
import SoliqIcon from '../../assets/svg/soliq-icon.svg';
import QRGenerator from '../QRGenerator/QRGenerator';
import classes from './scanCheck.module.scss';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';
import { display } from '@mui/system';

const ScanCheck = (props) => {
  const { selectedLang } = useSelector((state) => state.lang);
  const { qrCode } = useSelector((state) => state.auth);
  const sendPhoneHandler = () => {
    console.log(phoneNumber);
    props.onContinue(phoneNumber);
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  const phoneValidation = (value) => {
    // validation will be here
    setPhoneNumber(value);
  }
  return (
    <Container
      className={classes['registration__container']}
      maxWidth="lg"
      disableGutters
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            borderRadius: '40px',
            marginTop: '50px',
            marginBottom: '50px',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '500px',
              borderBottomLeftRadius: '40px',
              borderTopLeftRadius: '40px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '50px 0',
              //borderRight: ' 2px dashed rgba(50, 94, 205, 0.2)',
            }}
          >
            
            <div className={classes['qr__wrap']}>
              <div className={classes['decorate']}></div>
              <QRGenerator qrCode={qrCode} />
              <img src={ScanBtn} alt="scan-me" style={{
                
                marginTop: "60px",
                //maxHeight: "77px",
                maxWidth: "166px"
              }}/>
            </div>
          </Box>
          <Box sx={{ 
            width: '50%', 
            height: '500px', 
            padding: '50px 0', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
            }}>
            <img
              src={SoliqIcon}
              alt="user Icon"
              className={classes['img']}
              sx={{
                maxWidth: '264px',
                //height: '164px',
                display: 'block',
                margin: ' 0 auto 25px'
              }}
            />
            <Typography
              sx={{
                paddingTop: '30px',
                paddingBottom: '25px',
                fontFamily: 'Nunito',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'center',
                color: '#233259',
              }}
              dangerouslySetInnerHTML={{ __html: `${globalLocales.logIn.heading[selectedLang]}`}}
            >
            </Typography>
            <span className={classes['secondary_text']}>
              Shaxsingizni tasdqilash uchun mobil <br/>
              ilova orqali QR-kodni skanerlang 
            </span>
            <span className={classes['secondary_text']}>
              Through a mobile application to verify <br/>
              your identity
              scan the QR code 
            </span>

            
            
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ScanCheck;
