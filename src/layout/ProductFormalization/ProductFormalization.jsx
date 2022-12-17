import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ListCheck from '../../components/ListCheck/ListCheck';
import Taxfree from '../../components/UserTaxfree/Taxfree';
import UserInfo from '../../components/UserTaxfree/UserInfo';
import cls from './ProductFormalization.module.scss';
import TaxFreeStatisticsTable from '../../components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { Fragment } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ProductFormalization = () => {
  const [isStatActive, setIsStatActive] = useState(false);
  const [data, setData] = useState([]);
  const { userId } = useSelector((state) => state.passport);
  useEffect(() => {
    // const userId = localStorage.getItem('userId');
    localStorage.removeItem('status');
    axios
      .get(
        `http://my-api.soliq.local/tax-free-api/product/get-all-product?userId=${userId}`
      )
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);
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
          <ListCheck state={data} />
        </Fragment>
      )}
    </div>
  );
};

export default ProductFormalization;
