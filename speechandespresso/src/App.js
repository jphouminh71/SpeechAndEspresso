import { Outlet } from 'react-router-dom';
import Header  from './Components/Header/Header'; 
import Footer  from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Outlet /> 
      <Footer /> 
    </div>
  );
}

export default App;
