import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCode = (props) => {
  return (
    <div className="qrcode__container">
      <div>
        {<QRCodeCanvas id="qrCode" value={props.qrCode} size={332} level={'H'} />}
      </div>
    </div>
  );
};

export default QrCode;
