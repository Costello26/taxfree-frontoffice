import SideBar from './layout/Sidebar/SideBar';
import ListInpector from './components/ListInspector/ListInpector';
import Footer from './layout/Footer/Footer';
import AppBar from './components/AppBar/AppBar';
import ScanCheck from './components/ScanCheck/ScanCheck';
import RegulaInfo from './components/RegulaInfo/RegulaInfo';
import UserInfo from './components/UserTaxfree/UserInfo';
import QRGenetator from './components/QRGenerator/QRGenerator'
import Taxfree from './components/UserTaxfree/Taxfree';
import ListCheck from './components/ListCheck/ListCheck';
import TaxfreeStatisticsTable from './components/TaxFreeStatisticsTable/TaxFreeStatisticsTable'
import { useEffect } from 'react';
import axios from 'axios'
function App() {

  return (
    <div className="App">
         {/* <SideBar/>
        <AppBar/>
        <ListInpector/>
        <Footer/>  */}
        {/* <ScanCheck/> */}
        {/* <RegulaInfo/> */}
        {/* <QRGenetator/> */}
      {/* <UserInfo/> */}
        {/* <Taxfree/> */}
        {/* <ListCheck/> */}
        <TaxfreeStatisticsTable/>
    </div>
  );
}

export default App;
