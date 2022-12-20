import React, { useState } from 'react';
import { Box, Container, Avatar, Typography, TextField, Button } from '@mui/material';
import ScanBtn from '../../assets/Png/Scanme.png';
import UserIcon from '../../assets/Png/userAvatar.png';
import QRGenerator from '../QRGenerator/QRGenerator';
import classes from './scanCheck.module.scss';
import { useSelector } from 'react-redux';
import { globalLocales } from '../../assets/locales';

const ScanCheck = (props) => {
  const { selectedLang } = useSelector((state) => state.lang);
  const { qrCode } = useSelector((state) => state.auth);
  console.log(qrCode);
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
      maxWidth="xl"
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
              justifyContent: 'start',
              padding: '50px 0',
              borderRight: ' 2px dashed rgba(50, 94, 205, 0.2)',
            }}
          >
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
                color: '#325ECD',
                textAlign: 'center',
              }}
            >
              Ro’yxatdan o’tish uchun Soliq ilova orqali <br />
              Qr-kodni skaner qiling!
            </Typography>
            <Typography
              sx={{
                fontWeight: '600',
                fontSize: '20px',
                color: '#325ECD',
                textAlign: 'center',
                padding: '15px 0',
              }}
            >
              Для подтверждения личности просим <br />
              отсканировать QR код с помощью <br />
              приложения Soliq
            </Typography>
            <QRGenerator qrCode={qrCode} />
            <img src={ScanBtn} alt="scan-me" style={{
              marginTop: "20px",
              maxWidth: "450px",
              height: "70px"
            }}/>
          </Box>
          <Box sx={{ width: '50%', height: '500px', padding: '50px 0' }}>
            <Avatar
              src={UserIcon}
              alt="user Icon"
              sx={{
                width: '164px',
                height: '164px',
                display: 'block',
                margin: ' 0 auto 25px',
              }}
            />
            <Typography
              sx={{
                fontFamily: 'Nunito',
                fontWeight: 700,
                fontSize: '24px',
                textAlign: 'center',
                color: '#325ECD',
              }}
              dangerouslySetInnerHTML={{ __html: `${globalLocales.logIn.heading[selectedLang]}`}}
            >
            </Typography>

            <Container maxWidth="sm">
              <TextField
                type="number"
                label={globalLocales.logIn.formLabel[selectedLang]}
                variant="outlined"
                value={phoneNumber}
                onChange={(e) => phoneValidation(e.target.value)}
                sx={{
                  width: '100%',
                  height: '56px',
                  margin: '38px 0',
                  '& fieldset': {
                    borderRadius: '20px',
                    backgroundColor: 'rgba(50, 94, 205, 0.05)',
                  },
                }}
              />
            </Container>
            <Container maxWidth="sm">
              <Button
                variant="contained"
                sx={{
                  width: '100%',
                  height: '56px',
                  borderRadius: '25px',
                  bgColor: '#325ECD',
                  textTransform: 'none',
                  fontSize: '18px'
                }}
                onClick={sendPhoneHandler}
              >
                {globalLocales.logIn.buttonLabel[selectedLang]}
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ScanCheck;
