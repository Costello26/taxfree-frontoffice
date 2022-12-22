import { Container } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ListCheck from '../../components/ListCheck/ListCheck';
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
  }, [userId, navigate, selectedLang]);
  return (
    <div className="container">
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
