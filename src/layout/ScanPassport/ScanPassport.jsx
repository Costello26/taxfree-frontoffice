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
    const fetchData = async () => {
      try {
        if (localStorage.getItem('status')) {
          navigate('/product-formalization');
        }
        return await fetch(
          `https://mobile.soliq.uz/my3-api/tax-free-api/user/qr/check-state/${props.qrCode}`,
          {
            method: 'POST',
          }
        );
      } catch (error) {
        console.log(error);
      }
    };
    const id = setInterval(async () => {
      const res = await fetchData();
      const user = await res.json();
      if (user.success && user.code === 2) {
        console.log(user);
        navigate('/product-formalization');
      }
    }, 3000);

    return () => clearInterval(id);
  }, [navigate, props.qrCode]);
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
