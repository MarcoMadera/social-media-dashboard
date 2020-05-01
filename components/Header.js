import React from 'react';
import './css/Header.css';

function Header (props) {
  return (
    <div className="header">
    <div className="header-grid">
      <h1 className="header-title">Social Media Dashboard</h1>
      <h1></h1>
      <h2 className="header-subtitle">Total followers: {props.followers}</h2>
      <p>Dark Mode swich</p>
      <p>Dark Mode</p>
    </div>
    </div>
  )
}

export default Header;