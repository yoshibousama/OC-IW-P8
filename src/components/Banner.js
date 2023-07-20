import React from "react";
import sass from "../sass/components/banner.module.scss";

const Banner = ({ bannerHero, page, bannerTitle }) => {
  return (
    <div className={`${sass.banner} ${page}`}>
      <img className={sass.banner_img} src={bannerHero} alt="banner" />
      <h2 className={sass.banner_title}>{bannerTitle}</h2>
    </div>
  );
};

export default Banner;
