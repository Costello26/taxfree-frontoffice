import SideBar from './layout/Sidebar/SideBar';
import ListInpector from './components/ListInspector/ListInpector';
import Footer from './layout/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './layout/Registration/Registration';
import ScanPassport from './layout/ScanPassport/ScanPassport';
import ScanTalon from './layout/ScanTalon/ScanTalon';
import ProductFormalization from './layout/ProductFormalization/ProductFormalization';
import UsersFormalition from './layout/UserFormalization/UsersFormalition';
import StatisticsPage from './layout/StatisticsPage/Statistics';
import PrintCheck from './components/printCheck/PrintCheck';
// import * as StompJs from '@stomp/stompjs';

// const SOCKET_URL = 'ws://10.255.53.91:14069/tax-free-api/websocket-server';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/statistic" element={<StatisticsPage />} />
          <Route path="/login" element={<Registration />} />
          {/* <Route path="/login" element={<Registration qrCode={qrCode} />} /> */}
          {/* <Route
            path="/scan-passport"
            element={<ScanPassport stompClient={stompClient} />}
          /> */}
          <Route path="/scan-passport" element={<ScanPassport />} />
          <Route path="/scan-talon" element={<ScanTalon />} />
          <Route path="/product-formalization" element={<ProductFormalization />} />
          <Route path="/users-formalization" element={<UsersFormalition />} />
          <Route path="/printCheck" element={<PrintCheck />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
