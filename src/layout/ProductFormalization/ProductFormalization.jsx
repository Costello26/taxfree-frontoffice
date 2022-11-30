import React from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ListCheck from '../../components/ListCheck/ListCheck';
import Taxfree from '../../components/UserTaxfree/Taxfree';
import UserInfo from '../../components/UserTaxfree/UserInfo';
import cls from './ProductFormalization.module.scss';

const ProductFormalization = () => {
  return (
    <div className="container">
      <AppBar />
      <div className={cls['user-details']}>
        <div className={cls['user-info']}>
          <UserInfo />
        </div>
        <div className={cls['user-taxfree']}>
          <Taxfree />
        </div>
      </div>
      <ListCheck />
    </div>
  );
};

export default ProductFormalization;
