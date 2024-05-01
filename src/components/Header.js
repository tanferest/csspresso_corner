import { Link } from 'react-router-dom';
import logo from '../images/logos/logo-01.svg';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
        <Link to="/"><img className='header__logo' src={logo} alt="" /></Link>
    </header>
  );
}

export default Header;
