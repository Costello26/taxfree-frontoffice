import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import ListCheck from '../../components/ListCheck/ListCheck';
// import Taxfree from '../../components/UserTaxfree/Taxfree';
// import UserInfo from '../../components/UserTaxfree/UserInfo';
//import cls from './ProductFormalization.module.scss';
import TaxFreeStatisticsTable from '../../components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserBadge } from '../../components/UserBadge/UserBadge';
import ApiService from '../../service/fetch.api.service';
import { NotificationManager } from 'react-notifications';
import { globalLocales } from '../../assets/locales';

const ProductFormalization = (props) => {
  const [isStatActive, setIsStatActive] = useState(false);
  const [data, setData] = useState([]);
  const { selectedLang } = useSelector((state) => state.lang);
  const { userId } = useSelector((state) => state.passport);
  const navigate = useNavigate();
  useEffect(() => {
    // if (!userId) {
    //   navigate('/login');
    // }
    const getAllProducts = async () => {
      const res = await ApiService.getProductsByID(userId);
      console.log(res);
      if (res.data) {
        return setData(res.data);
      }
      NotificationManager.error(globalLocales.notifications.loadingError[selectedLang]);
      return setData([]);
    };
    getAllProducts();
  }, [userId, navigate]);
  return (
    <div className="container">
      {/* <AppBar
        onRegClick={() => setIsStatActive(false)}
        onStatClick={() => setIsStatActive(true)}
      /> */}
      {isStatActive ? (
        <TaxFreeStatisticsTable />
      ) : (
        <Container maxWidth="xl">
          <UserBadge step={4} />
          <ListCheck state={data} />
        </Container>
      )}
    </div>
  );
};

export default ProductFormalization;
