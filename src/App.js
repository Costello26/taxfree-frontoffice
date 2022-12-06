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
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/statistic" element={<StatisticsPage />} />
          <Route path="/register" element={<Registration stompClient={stompClient} />} />
          <Route path="/scan-passport" element={<ScanPassport />} />
          <Route path="/scan-talon" element={<ScanTalon />} />
          <Route path="/product-formalization" element={<ProductFormalization />} />
          <Route path="/users-formalization" element={<UsersFormalition />} />
          <Route path="/statistics" element={<></>} />
        </Routes>
      </Router>
      <Footer />
      {/* <ScanCheck/> */}
      {/* <QRGenetator/> */}
      {/* <UserInfo/> */}
      {/* <Taxfree/> */}
      {/* <ListCheck/> */}
      {/* <TaxfreeStatisticsTable /> */}
      {/* <Modal>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: "540px",
          height: "500px",
          background: "#FFFFFF",
          borderRadius: "40px",
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection:"column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img src={CheckBox} alt="CheckBox" style={{ width: "150px", height: "150px" }} />
          <Typography
          sx={{fontSize:"24px", fontWeight:600, textAlign:"center", mt:"55px"}}
          >Shaxsga doir ma`lumotlar tasdiqlandi!</Typography>
          <Typography
          sx={{fontSize:"24px", fontWeight:600, textAlign:"center", mt:"35px"}}
          >Личные данные подтверждены!
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
}

export default App;
