import React from "react";
import '../styles/service-card.css'
import { FaCode } from "react-icons/fa6";
import { fontsColor } from "../assets/fonts/colors";

const ServiceCard = ({title,icon,description}) => {
  return (
    <>
      <div className="service-card">
        <div className="service-logo">
          {icon}
        </div>
        <div className="service-title">
          <h2>{title}</h2>
        </div>
        <div className="service-desc">
          <p className="desc" style={{color:fontsColor.darkBlue}}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
