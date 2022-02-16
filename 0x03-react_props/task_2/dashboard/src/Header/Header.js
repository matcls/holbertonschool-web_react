import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import './Header.css';

const Header = () => (
  <div className='header'>
    <img src={logo}
      alt="logo" />
    <h1>School dashboard</h1>
  </div>
);

export default Header;
