import React from "react";
import Banner from "../components/Banner";
import BannerAbout from "../assets/IMG-2.png";
import Collapse from "../components/Collapse";
import sass from "../sass/layouts/about.module.scss";

const About = () => {
  return (
    <div className="about">
      <Banner bannerHero={BannerAbout} page="about" />
      <div className={sass.collapse_about}>
        <Collapse
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
          perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
          correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
          locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
};

export default About;
