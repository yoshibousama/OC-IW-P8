import starOn from "../assets/star-on.png";
import starOff from "../assets/star-off.png";
import sass from "../sass/components/stars.module.scss";

const Stars = ({ rate }) => {
  const rating = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star = i < rating ? starOn : starOff;
      stars.push(<img src={star} alt="rating" key={i} className={star} />);
    }
    return stars;
  };

  return <div className={sass.rating}>{rating(rate)}</div>;
};

export default Stars;
