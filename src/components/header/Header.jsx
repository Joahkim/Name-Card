import React from "react";
import "./header.scss";

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      {onLogout && (
        <button className="logout" onClick={onLogout}>
          Log Out
        </button>
      )}
      <img className="logo" src="/images/logo.png" alt="logo" />
      <h1 className="title">Business Card Maker</h1>
    </header>
  );
};

export default Header;
