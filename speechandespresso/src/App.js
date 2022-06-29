import { Outlet } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import './App.css';
import './Components/Banner/banner.css';

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      <div className="banner-divider" />
    </div>
  );
}

export default App;
