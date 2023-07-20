import React from "react";
import { Link } from "react-router-dom";
import sass from "../sass/layouts/error404.module.scss";

const Error404 = () => {
  return (
    <div className={sass.error404}>
      <span className={sass.error404_title}>404</span>
      <p className={sass.error404_text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className={sass.error404_link}>
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
};

export default Error404;
