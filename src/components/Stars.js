import starOn from "../assets/star-on.png";
import starOff from "../assets/star-off.png";
import sass from "../sass/components/stars.module.scss";

const Stars = ({ rate }) => {
  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const starClass = i < rating ? starOn : starOff;
      stars.push(
        <img src={starClass} alt="rating" key={i} className={starClass} />
      );
    }
    return stars;
  };

  return <div className={sass.rating}>{getRatingStars(rate)}</div>;
};

export default Stars;
