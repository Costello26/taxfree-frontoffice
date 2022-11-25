import logo from './logo.svg';
import './App.css';
import SideBar from './layout/Sidebar/SideBar';
import ListUsers from './components/ListUsers/ListUsers';
import Footer from './layout/Footer/Footer';
import AppBar from './components/AppBar/AppBar';
function App() {
  return (
    <div className="App">
        <SideBar/>
        <AppBar/>
        <ListUsers/>
        <Footer/>
    </div>
  );
}

export default App;
