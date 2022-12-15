import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ListCheck from '../../components/ListCheck/ListCheck';
import Taxfree from '../../components/UserTaxfree/Taxfree';
import UserInfo from '../../components/UserTaxfree/UserInfo';
import cls from './ProductFormalization.module.scss';
import TaxFreeStatisticsTable from '../../components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { Fragment } from 'react';

const ProductFormalization = () => {
  const [isStatActive, setIsStatActive] = useState(false);
  return (
    <div className="container">
      <AppBar
        onRegClick={() => setIsStatActive(false)}
        onStatClick={() => setIsStatActive(true)}
      />
      {isStatActive ? (
        <TaxFreeStatisticsTable />
      ) : (
        <Fragment>
          <div className={cls['user-details']}>
            <div className={cls['user-info']}>
              <UserInfo />
            </div>
            <div className={cls['user-taxfree']}>
              <Taxfree />
            </div>
          </div>
          <ListCheck />
        </Fragment>
      )}
    </div>
  );
};

export default ProductFormalization;
