import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';

const ScanPassport = () => {
  return (
    <div className="container">
      <AppBar />
      <div className={classes['card__content']}>
        <RegulaInfo />
      </div>
    </div>
  );
};

export default ScanPassport;
