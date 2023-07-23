import React, { useState } from "react";
import sass from "../sass/components/collapse.module.scss";

const Collapse = ({ title, description }) => {
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className={sass.collapse}>
      <div className={sass.collapse_header} onClick={handleToggle}>
        <h3 className={sass.collapse_description_title}>{title}</h3>
        <span
          className={`${sass.arrow} ${isToggle ? sass.open : sass.closed}`}
        ></span>
      </div>
      {isToggle && (
        <div className={sass.collapse_description}>
          {Array.isArray(description) ? (
            <ul>
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className={sass.collapse_description_text}>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Collapse;
