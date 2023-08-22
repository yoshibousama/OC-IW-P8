import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import data from "../database/data.json";
import { useParams, Navigate } from "react-router-dom";
import sass from "../sass/layouts/accommodation.module.scss";
import "../sass/components/collapse.module.scss";
import Stars from "../components/Stars";
import Tags from "../components/Tags";

const Accommodation = () => {
  const { id } = useParams();
  const accommodationData = data.find(
    (accommodation) => accommodation.id === id
  );

  return (
    <div>
      {!accommodationData ? (
        <Navigate to="/Error404" />
      ) : (
        <div>
          <Slideshow
            image={accommodationData.pictures}
            imageLength={accommodationData.pictures.length}
          />
          <div className={sass.accommodation_details}>
            <div className={sass.description_left}>
              <h2 className={sass.accommodation_title}>
                {accommodationData.title}
              </h2>
              <p className={sass.accommodation_location}>
                {accommodationData.location}
              </p>
              <div className={sass.accommodation_tags}>
                {accommodationData.tags.map((tags, index) => (
                  <Tags key={`${index}-${tags}`} tags={tags} />
                ))}
              </div>
            </div>
            <div className={sass.description_right}>
              <div className={sass.accommodation_host}>
                <p className={sass.accommodation_host_name}>
                  {accommodationData.host.name}
                </p>
                <img
                  className={sass.accommodation_host_picture}
                  src={accommodationData.host.picture}
                  alt={accommodationData.host.name}
                />
              </div>
              <Stars rate={accommodationData.rating} />
            </div>
          </div>

          <div className={sass.accommodation_information}>
            <div className={sass.collapse_left}>
              <Collapse
                title="Description"
                description={accommodationData.description}
              />
            </div>

            <div className={sass.collapse_right}>
              <Collapse
                title="Équipements"
                description={accommodationData.equipments}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accommodation;
