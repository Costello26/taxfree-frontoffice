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
function App() {
  return (
    <div className="App">
      {/* <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/scan-passport" element={<ScanPassport />} />
        </Routes>
      </Router>
      <Footer /> */}
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
