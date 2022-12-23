import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Box, CircularProgress } from '@mui/material';

const QrCode = (props) => {
  return (
    <div className="qrcode__container">
      {!props.qrCode && ( 
        <Box sx={{ 
          display: 'flex', 
          maxWidth: '65px', 
          height: '190px',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 auto'
        }}>
          <CircularProgress />
        </Box>
      )}
      {props.qrCode && (
        <QRCodeCanvas
          id="qrCode"
          value={props.qrCode}
          size={200}
          level={'H'}
          fgColor="#233259"
        />
      )}
    </div>
  );
};

export default QrCode;
