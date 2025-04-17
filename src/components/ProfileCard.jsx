import React from "react";
import images from '../assets/images/images'
const ProfileCard = () => {
  return (
    <div className="position-relative mx-auto" style={{ width: "300px", height: "400px" }}>
      <div
        className="position-absolute border border-4 border-danger"
        style={{
            borderRadius:'10px',
          top: "20px",
          left: "20px",
          width: "100%",
          height: "100%",
          border:'3px',
          zIndex: 0,
        }}
      ></div>
      <img
        src={images.Profile}
        alt="Profile"
        className="position-absolute img-fluid rounded"
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
    </div>
  );
};

export default ProfileCard;
