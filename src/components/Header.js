import React from "react";
import { Link } from "react-router-dom";
import sass from "../sass/components/header.module.scss";
import logo from "../assets/LOGO-header.png";

const Header = () => {
  return (
    <div className={sass.nav}>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div>
        <Link to="/" className={sass.nav_link}>
          Accueil
        </Link>
        <Link to="/about" className={sass.nav_link}>
          A propos
        </Link>
      </div>
    </div>
  );
};

export default Header;
