import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LupIcon from '../../assets/Png/lupIcon.png';

const RegulaInfo = (props) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ flexGrow: 1, height: '700px' }}>
        <Box
          sx={{
            width: '100%',
            height: '800px',
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
            {props.textUZ}
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
            {props.textRU}
          </Typography>
          <div
            style={{
              width: '527px',
              height: '527px',
              backgroundImage: { LupIcon },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '55px auto',
              position: 'relative',
            }}
          >
            <img
              src={LupIcon}
              alt=""
              style={{
                width: '600px',
                height: '600px',
                position: 'absolute',
                top: '25px',
                left: '40px',
              }}
            />
            <img
              src={props.imgSrc}
              alt="regula"
              style={{
                width: '242px',
                height: '210px',
                borderRadius: '0',
              }}
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default RegulaInfo;
