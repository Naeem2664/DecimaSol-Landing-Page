import React from "react";
import '../styles/skillbar.css'
import { fontsColor } from "../assets/fonts/colors";
const Skill = ({name,level}) => {
  return (
    <>
       <div className="skill-container">
      <div className="skill-label" style={{color:fontsColor.darkBlue}}>{name}</div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${level}%` }}>
          {level}%
        </div>
      </div>
    </div>
    </>
  );
};

export default Skill;


{/* <div
className="progress-bar-striped progress-bar-animated bg-danger text-white fw-bold"
role="progressbar"
style={{ width: `${level}%`, height: "20px" }}
aria-valuenow={level}
aria-valuemin="0"
aria-valuemax="100"
></div> */}