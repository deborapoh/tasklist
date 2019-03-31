import React from 'react';
import { Link } from 'react-router-dom';

const PAGES = [
  {
    name: 'Tarefas',
    path: '/',
    loader: './pages/TaskList',
  },
  {
    name: 'Título',
    path: '/',
    loader: './pages/EditTask',
  },
];

const Nav = () => (
  <nav>
    {
      PAGES.map(nav => (
        <Link key={nav.name} to={nav.path} style={{ textDecoration: 'none' }} >{nav.name}</Link>
      ))
    }
  </nav>
);

export default Nav;
