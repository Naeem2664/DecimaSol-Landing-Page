import React from "react";
import "../styles/home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 home-content">
              <h4>Welcome</h4>
              <h1>I'm Muhammad Naeem</h1>
              <div class="main">
                  <h2>
                    <div className="roller">
                      <span id="rolltext">
                        Software Engineer
                        <br />
                        Full Stack Web Developer
                        <br />
                        Open Source Contributor
                        <br />
                      </span>
                    </div>
                  </h2>
                </div>
              <p>
                I am a full stack developer with experience in building web
                applications using React, Node.js, and MongoDB. I am passionate
                about coding and always eager to learn new technologies.
              </p>
              <button className="button" type="button" style={{color: "#cb181e", backgroundColor: "#fff", border: "none", padding: "10px 20px", borderRadius: "5px"}}> 
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
