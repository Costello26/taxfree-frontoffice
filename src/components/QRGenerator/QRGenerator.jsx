import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Box, CircularProgress } from '@mui/material';

const QrCode = (props) => {
  return (
    <div className="qrcode__container">
      {!props.qrCode && (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      )}
      {props.qrCode && (
        <QRCodeCanvas id="qrCode" value={props.qrCode} size={200} level={'H'} />
      )}
    </div>
  );
};

export default QrCode;
