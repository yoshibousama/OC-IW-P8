import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import data from "../database/data.json";
import sass from "../sass/layouts/home.module.scss";

const Home = () => {
  const card = data.map((data) => {
    return <Card key={data.id} accommodation={data} />;
  });

  return (
    <section>
      <div>
        <Banner />
      </div>
      <div className={sass.grid}>{card}</div>
    </section>
  );
};

export default Home;
