import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ListCheck from '../../components/ListCheck/ListCheck';
import Taxfree from '../../components/UserTaxfree/Taxfree';
import UserInfo from '../../components/UserTaxfree/UserInfo';
import cls from './ProductFormalization.module.scss';
import TaxFreeStatisticsTable from '../../components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ApiService from '../../service/fetch.api.service';

const ProductFormalization = () => {
  const [isStatActive, setIsStatActive] = useState(false);
  const [data, setData] = useState([]);
  const { userId } = useSelector((state) => state.passport);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate('/login');
    }
    const getAllProducts = async () => {
      const res = await ApiService.getProductsByID(userId);
      setData(res.data);
    };
    getAllProducts();
  }, [userId, navigate]);
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
