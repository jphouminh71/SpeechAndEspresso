import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/shop"> shop </Link>
        <Link to="/shop/itemdetails"> itemDetails </Link>
        <Link to="/cart"> cart </Link>
      </nav>
      <p> Landing Page </p>
    </div>
  );
}

export default App;
