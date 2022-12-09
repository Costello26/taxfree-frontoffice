import React, { useRef } from 'react';
import { Box, Container, Avatar, Typography, TextField, Button } from '@mui/material';
import ScanBtn from '../../assets/Png/Scanme.png';
import User from '../../assets/Png/User.png';
import QRGenerator from '../QRGenerator/QRGenerator';
import classes from './scanCheck.module.scss';
const ScanCheck = (props) => {
  const sendPhoneHandler = () => {
    console.log(phoneNumberRef.current.value);
    props.onContinue(phoneNumberRef.current.value);
  };
  const phoneNumberRef = useRef(null);
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
            marginTop: '105px',
            marginBottom: '300px',
          }}
        >
          <Box
            sx={{
              width: '50%',
              height: '700px',
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
            <QRGenerator qrCode={props.qrCode} />
            <Avatar
              src={ScanBtn}
              alt="Tax Free"
              sx={{
                width: '332px',
                height: '92px',
                borderRadius: '0px',
                padding: '35px 0',
              }}
            />
          </Box>
          <Box sx={{ width: '50%', height: '700px', padding: '50px 0' }}>
            <Avatar
              src={User}
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
                fontSize: '30px',
                textAlign: 'center',
                color: '#325ECD',
              }}
            >
              Chet el fuqarosini <br />
              TaxFree summasini ro’yxatga olish.
            </Typography>

            <Container maxWidth="sm">
              <TextField
                type="number"
                label="Telefon raqam"
                variant="outlined"
                inputRef={phoneNumberRef}
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
                }}
                onClick={sendPhoneHandler}
              >
                Davom etish
              </Button>
            </Container>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ScanCheck;
