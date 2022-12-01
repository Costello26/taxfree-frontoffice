import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import Regula from '../../assets/Png/Regula.png';
const RegulaInfo = () => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ flexGrow: 1, height: '700px' }}>
        <Box
          sx={{
            width: '100%',
            height: '700px',
            borderRadius: '40px',
            textAlign: 'center',
            backgroundColor: '#FFF',
            padding: '25px 0',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              color: '#325ECD',
              fontWeight: '600',
              fontSize: '25px',
            }}
          >
            Shaxsingizni tasdiqlovchi xujjatni ochiq holda skanerlash qurilmasiga qo'ying
          </Typography>
          <br />
          <Typography
            sx={{
              fontFamily: 'Montserrat',
              color: '#325ECD',
              fontWeight: '600',
              fontSize: '25px',
            }}
          >
            Положите документ, подтверждающий вашу личность в открытом виде <br /> на
            устройство сканирования
          </Typography>
          <Box
            sx={{
              width: '527px',
              height: '527px',
              background: '#F3F6FF',
              border: '2px solid rgba(50, 94, 205, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '25px auto',
            }}
          >
            <Avatar
              src={Regula}
              alt="regula"
              sx={{
                width: '482px',
                height: '320px',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegulaInfo;
