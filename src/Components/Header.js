import logo from '../images/header-logo.svg';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React  from 'react';
// import { Route, Routes } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
      <Link
        to={location.pathname === '/sign-in' ? '/sign-up' : '/sign-in'}
        className="header__button">{location.pathname === '/sign-in' ? 'Регистрация' : 'Вход'}</Link>
    </header>
  );
};

export default Header;


