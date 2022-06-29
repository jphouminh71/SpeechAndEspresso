import './NavBar.css';
import Logo from '../../Assets/primary-logo.png';
import NavButton from '../Buttons/NavButton/NavButton';

function Header() {
    return (
        <div className="header-grid">
            <div className="header-logo-container">
                <img className="header-logo" alt="logo" src={Logo} />
            </div>
            <div className="header-text-container">
                <h1 className="header-text"> Speech and Espresso </h1>
            </div>
            <div className="header-button-container">
                <NavButton type="Mail" />
                <NavButton type="Search" />
                <NavButton type="local_mall" />
                <NavButton type="List" />
            </div>
        </div>
    );
}
export default Header; 
