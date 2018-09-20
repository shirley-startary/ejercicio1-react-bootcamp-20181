// Dependencia
import React from 'react';

// Assets
import logo from './images/logo.svg';
import './css/Header.css';

const Header = (props) => {
  console.log(props);
  return (
    <div className="Header">
      <header className="Header-header">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1 className="Header-title">Welcome to React</h1>
        <ul className="Menu">
          {props.items.map((item, i) => {
            return (<li key={i}>{item.title}</li>)
          })}
        </ul>
      </header>
    </div>
  );
}

export default Header;
