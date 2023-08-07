import sass from "../sass/components/slideshow.module.scss";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
import React, { useState } from "react";

const Slideshow = ({ image, imageLength }) => {
  const [index, setIndex] = useState(0);

  const previousImg = (index) => {
    index > 0 ? setIndex(index - 1) : setIndex((index = image.length - 1));
  };

  const nextImg = (index) => {
    index < imageLength - 1 ? setIndex(index + 1) : setIndex((index = 0));
  };

  if (imageLength === 1) {
    return (
      <div className={sass.slider_container}>
        <img
          className={sass.slider}
          src={image[index]}
          alt="accommodation preview"
          key={`Slideshow-${index}`}
        />
      </div>
    );
  } else if (imageLength > 0) {
    return (
      <div className={sass.slider_container}>
        <img
          className={sass.slider}
          src={image[index]}
          alt="accommodation preview"
          key={`Slideshow-${index}`}
        />
        <div className={sass.arrow_container}>
          <button className={sass.previous} onClick={() => previousImg(index)}>
            <img src={leftArrow} alt="left arrow" />
          </button>
          <button className={sass.next} onClick={() => nextImg(index)}>
            <img src={rightArrow} alt="right arrow" />
          </button>
        </div>
        <p className={sass.number}>
          {index + 1} / {imageLength}
        </p>
      </div>
    );
  }
};

export default Slideshow;
