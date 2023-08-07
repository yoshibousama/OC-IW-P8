import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import data from "../database/data.json";
import { useParams } from "react-router-dom";
import "../sass/layouts/accommodation.module.scss";
import "../sass/components/collapse.module.scss";

const Accommodation = () => {
  const { id } = useParams();
  const accommodationData = data.find(
    (accommodation) => accommodation.id === id
  );

  return (
    <div>
      <Slideshow
        image={accommodationData.pictures}
        imageLength={accommodationData.pictures.length}
      />

      <div>
        <Collapse
          title="Description"
          description={accommodationData.description}
        />

        <Collapse
          title="Équipements"
          description={accommodationData.equipments}
        />
      </div>
    </div>
  );
};

export default Accommodation;
