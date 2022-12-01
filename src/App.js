import SideBar from './layout/Sidebar/SideBar';
import ListInpector from './components/ListInspector/ListInpector';
import Footer from './layout/Footer/Footer';
import UserInfo from './components/UserTaxfree/UserInfo';
import QRGenetator from './components/QRGenerator/QRGenerator';
import Taxfree from './components/UserTaxfree/Taxfree';
import ListCheck from './components/ListCheck/ListCheck';
import TaxfreeStatisticsTable from './components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './layout/Registration/Registration';
import ScanPassport from './layout/ScanPassport/ScanPassport';
import ScanTalon from './layout/ScanTalon/ScanTalon';

import ProductFormalization from './layout/ProductFormalization/ProductFormalization'
import UsersFormalition from './layout/UserFormalization/UsersFormalition'
function App() {
  return (
    <div className="App">
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/scan-passport" element={<ScanPassport />} />
          <Route path="/scan-talon" element={<ScanTalon />} />
          <Route path="/product-formalization" element={<ProductFormalization />} />
          <Route path="/users-formalization" element={<UsersFormalition />} />
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
