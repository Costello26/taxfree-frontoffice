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
import * as StompJs from '@stomp/stompjs';

const SOCKET_URL = 'ws://10.255.53.91:14069/tax-free-api/websocket-server';

function App() {
  const stompClient = new StompJs.Client({
    brokerURL: SOCKET_URL,
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });
  stompClient.activate();
  return (
    <div className="App">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/statistic" element={<StatisticsPage />} />
          <Route path="/register" element={<Registration stompClient={stompClient} />} />
          <Route
            path="/scan-passport"
            element={<ScanPassport stompClient={stompClient} />}
          />
          <Route path="/scan-talon" element={<ScanTalon />} />
          <Route path="/product-formalization" element={<ProductFormalization />} />
          <Route path="/users-formalization" element={<UsersFormalition />} />
          <Route path="/printCheck" element={<PrintCheck/> } />
        </Routes>
        <Footer />
      </Router>


      {/* <PrintCheck/> */}
      {/* <ScanCheck/> */}
      {/* <QRGenetator/> */}
      {/* <UserInfo/> */}
      {/* <Taxfree/> */}
      {/* <ListCheck/> */}
      {/* <TaxfreeStatisticsTable /> */}
      
    </div>
  );
}

export default App;
