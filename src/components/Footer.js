import React from "react";
import sass from "../sass/components/footer.module.scss";
import logo from "../assets/LOGO-footer.png";

const Footer = () => {
  return (
    <div className={sass.footer}>
      <div className={sass.footer_container}>
        <img className={sass.footer_img} src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
