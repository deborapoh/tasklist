import React from 'react';
import logo from '../assets/logo.svg';
import menuImg from '../assets/menu.svg';
import { Link } from 'react-router-dom';

import './style.scss';

const Header = () => (
  <header>
    <Link to="/" style={{ textDecoration: 'none' }} >
      <img className="logo" src={`/${logo}`} alt="Logo" />
    </Link>
    <Link to="/about" style={{ textDecoration: 'none' }} >
      <img className="menu" src={`/${menuImg}`} alt="Menu" />
    </Link>
  </header>
);

export default Header;
