import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">События во Львове 2020</div>
      <div>
        <input className="header-search" type="search" placeholder="Поиск по сайту"/> 
      </div>
    </header>
  );
};

export default Header;
