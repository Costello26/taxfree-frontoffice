import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LupIcon from '../../assets/Png/lupIcon.png';

const RegulaInfo = (props) => {
  return (
    <Container maxWidth="xl" disableGutters>
      <Box sx={{ 
        flexGrow: 1, 
        height: '650px',
        //marginBottom: '50px',
      }}>
        <Box
          sx={{
            width: '100%',
            height: '650px',
            borderRadius: '40px',
            textAlign: 'center',
            backgroundColor: '#FFF',
            //padding: '25px 0px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center' 
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Roboto',
              color: '#325ECD',
              fontWeight: '600',
              fontSize: '25px',
              maxWidth: '80%',
              margin: '0 auto'
            }}
          >
            {props.textUZ} 
            <br/>
            {props.textRU}
          </Typography>
          
          <div
            style={{
              //height: '327px',
              margin: '55px auto',
              position: 'relative',
            }}
          >
            <img
              src={props.imgSrc}
              alt="Passport scanner"
              style={{
                marginTop: '30px',
                width: '242px',
                height: '210px',
              }}
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default RegulaInfo;
