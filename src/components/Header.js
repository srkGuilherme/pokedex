import React from "react";
import "../App.css";
import Logo from "../assets/images/logo-pokewiki.png";

function Header() {
  return (
    <div>
      <header className="Header">
        <div>
          <img src={Logo} className="Logo"></img>
        </div>
      </header>
    </div>
  );
}

export default Header;
