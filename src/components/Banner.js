import React from "react";
import sass from "../sass/components/banner.module.scss";
import banner from "../assets/IMG-1.png";

const Banner = () => {
  return (
    <div className={sass.banner}>
      <img className={sass.banner_img} src={banner} alt="banner" />
      <h2 className={sass.banner_title}>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;
