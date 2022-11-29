import SideBar from './layout/Sidebar/SideBar';
import ListInpector from './components/ListInspector/ListInpector';
import Footer from './layout/Footer/Footer';
import AppBar from './components/AppBar/AppBar';
import ScanCheck from './components/ScanCheck/ScanCheck';
import RegulaInfo from './components/RegulaInfo/RegulaInfo';
import UserInfo from './components/UserTaxfree/UserInfo';
import QRGenetator from './components/QRGenerator/QRGenerator';
import Taxfree from './components/UserTaxfree/Taxfree';
import ListCheck from './components/ListCheck/ListCheck';
import TaxfreeStatisticsTable from './components/TaxFreeStatisticsTable/TaxFreeStatisticsTable';
import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './layout/Registration/Registration';
function App() {
  return (
    <div className="App">
      {/* <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<ListInpector />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
      <Footer /> */}
      {/* <ScanCheck/> */}
      {/* <RegulaInfo/> */}
      {/* <QRGenetator/> */}
      {/* <UserInfo/> */}
      {/* <Taxfree/> */}
      {/* <ListCheck/> */}
      <TaxfreeStatisticsTable />
    </div>
  );
}

export default App;
