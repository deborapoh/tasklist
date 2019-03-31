import React from 'react';
import { Link } from 'react-router-dom';
import User from '../helpers/User';
// import Token from '../helpers/Token';

const PAGES_DEVELOPER = [
  {
    name: 'Home',
    path: '/',
    loader: './pages/Home',
  },,
  {
    name: 'PAGE A',
    path: '/pagea',
    loader: './pages/PageA',
  },
];
const PAGES_PRODUCTION = [
  {
    name: 'PAGE B',
    path: '/pageb',
    loader: './pages/PageB',
  },
  {
    name: 'PAGE C',
    path: '/pagec',
    loader: './pages/PageC',
  },
];

const NAVIGATIONS = process.env.NODE_ENV === 'development'
  ? PAGES_DEVELOPER
  : PAGES_PRODUCTION;

const onClickLogout = () => {
  window.location.reload();
  // Token.remove();
};

const Nav = () => (
  <nav>
    <ul>
      {NAVIGATIONS.map(nav => (
        <li key={nav.name}>
          <Link to={nav.path}>{nav.name}</Link>
        </li>
      ))}

      <li>
        <Link onClick={onClickLogout} to="./">
          Sair
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
