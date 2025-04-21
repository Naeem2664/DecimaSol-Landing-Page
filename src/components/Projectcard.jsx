import React from "react";
import "../styles/project-card.css";
import { fontsColor } from "../assets/fonts/colors";
const Projectcard = ({image,name,desc}) => {
  return (
    <>
      <div className="project-card">
        <div className="project-img">
          <img src={image} alt="project 1" />
        </div>
        <div className="project-details">
          <div className="name">
            <h4> {name}</h4>
          </div>
          <div className="desc" style={{color:fontsColor.darkBlue}}>
            <p>
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projectcard;
