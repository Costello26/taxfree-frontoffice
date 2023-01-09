import ListInpector from './components/ListInspector/ListInpector';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './layout/Registration/Registration';
import ScanPassport from './layout/ScanPassport/ScanPassport';
import ScanTalon from './layout/ScanTalon/ScanTalon';
import ProductFormalization from './layout/ProductFormalization/ProductFormalization';
import UsersFormalition from './layout/UserFormalization/UsersFormalition';
import StatisticsPage from './layout/StatisticsPage/Statistics';
import PrintCheck from './components/printCheck/PrintCheck';
import { useEffect } from 'react';

import notificationsStyle from 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Navbar from './components/Navbar/NavBar';
//import { globalLocales } from './assets/locales';

// const SOCKET_URL = 'ws://10.255.53.91:14069/tax-free-api/websocket-server';

function App() {
  useEffect(() => {
    setTimeout(() => {
      NotificationManager.success('Вы успешно вошли в систему');
    }, 1500);
  }, []);

  return (
    <div className="App" style={notificationsStyle}>
      <Router>
        <Navbar/>
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<ListInpector />} />
            <Route path="/statistic" element={<StatisticsPage />} />
            <Route path="/login" element={<Registration />} />
            <Route path="/scan-passport" element={<ScanPassport />} />
            <Route path="/scan-talon" element={<ScanTalon />} />
            <Route path="/product-formalization" element={<ProductFormalization />} />
            <Route path="/users-formalization" element={<UsersFormalition />} />
            <Route path="/printCheck" element={<PrintCheck />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <NotificationContainer />
    </div>
  );
}

export default App;
