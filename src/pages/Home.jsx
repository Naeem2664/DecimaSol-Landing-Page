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
              <div className="social-links">
                <a href="https://github.com/Naeem2664">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/muhammad-naeem-1b2b33219">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://medium.com/@faltooswag">
                  <i class="fa-brands fa-medium"></i>
                </a>
                <a href="https://stackoverflow.com/users/22205484/muhammad-naeem">
                <i class="fa-brands fa-stack-overflow"></i>
                </a>
                <a href="https://www.facebook.com/naeem.mohammad.7146">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
