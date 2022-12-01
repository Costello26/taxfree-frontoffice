import React from 'react';
import { Container, Box, Typography, Avatar } from '@mui/material';
import Regula from '../../assets/Png/Regula.png';
import LupIcon from '../../assets/Png/lupIcon.png'
const RegulaInfo = (props) => {
  let prop= props.state
  console.log(props );
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
            {prop.textUZ}
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
          {prop.textRU}
          </Typography>
          <div
            style={{
              width: '527px',
              height: '527px',
              backgroundImage:{LupIcon},
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '55px auto',
              position:"relative"
            }}
          >
            <img src={LupIcon} alt="" style={{width:"600px", height:"600px" , position:"absolute", top:"25px", left:"40px"}} />
              <img
                src={prop.imgSrc}
                alt="regula"
                style={{
                  width: '242px',
                  height: '210px',
                  borderRadius:"0"
                }}
              />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default RegulaInfo;
