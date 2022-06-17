import { Link, Outlet } from 'react-router-dom';
import Header  from './Components/Header/Header'; 
import Footer  from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/shop"> shop | </Link>
        <Link to="/shop/products"> shop-products | </Link>
        <Link to="/shop/itemdetails/4"> item4 | </Link>
        <Link to="/cart"> cart | </Link>
        <Link to="/checkout"> checkout </Link> 
      </nav>
      <Header /> 
      <p> Landing Page </p>
      <Outlet /> 
      <Footer /> 
    </div>
  );
}

export default App;
