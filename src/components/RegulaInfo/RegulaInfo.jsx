import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import LupIcon from '../../assets/Png/lupIcon.png';
// import { io } from 'socket.io-client';

const RegulaInfo = (props) => {
  let prop = props.state;
  let url = window.location.protocol + '//' + window.location.hostname + ':5000';
  // if (window.location.port != null) {
  //   url += ':' + window.location.port;
  // }
  url += '/Regula.SDK.Api';
  const regulaReaderConnect = () => {
    // fetch(url + '/signalr/hubs')
    //   .then((res) => res.body)
    //   .then((body) => console.log(body));
    // const socket = io('http://localhost:3000');
    // console.log(socket);
    fetch(url + '/Methods/Connect', {
      method: 'POST',
    });
    // socket.on('OnImageReady', function (ALight, APageIndex) {
    //   console.log(ALight, APageIndex);
    //   // if (OnImageReadyCallback != null)
    //   //     OnImageReadyCallback(ALight, APageIndex);
    // });
    // socket.on('onResultReady', (AType) => {
    //   console.log('Atype: ', AType);
    // });
    setTimeout(() => {
      window.open('http://127.0.0.1:5500/Index.html', '_blank');
      props.onProcessProducts();
    }, 5000);
  };
  useEffect(() => {
    regulaReaderConnect();
  });
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
              src={prop.imgSrc}
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
