import logo from '../images/logos/logo-01.svg';
import '../styles/Header.scss';

function Header() {
  return (
    <header className="header">
        <img className='header__logo' src={logo} alt="" />
    </header>
  );
}

export default Header;
