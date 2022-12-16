import React, { useEffect, useState } from 'react';
import AppBar from '../../components/AppBar/AppBar';
import RegulaInfo from '../../components/RegulaInfo/RegulaInfo';
import classes from './ScanPassport.module.scss';
import sloy from '../../assets/Png/sloy.png';
import { useNavigate } from 'react-router-dom';
// import Modal from '../../components/Modal/Modal';
const ScanPassport = (props) => {
  const navigate = useNavigate();
  // const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('status')=== 'true') {
      navigate('/product-formalization');
    }
  }, [navigate]);
  return (
    <div className="container">
      <AppBar />
      <div className={classes['card__content']}>
        <RegulaInfo
          textUZ="Shaxsingizni tasdiqlovchi xujjatni ochiq holda skanerlash qurilmasiga qo`ying"
          textRU="Положите документ, подтверждающий вашу личность в открытом виде  на устройство сканирования"
          imgSrc={sloy}
        />
      </div>
      {/* {modalActive && <Modal open={modalActive} onClose={modalCloseHandler}></Modal>} */}
    </div>
  );
};

export default ScanPassport;
