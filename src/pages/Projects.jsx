import React from "react";
import Projectcard from "../components/Projectcard";
import images from "../assets/images/images";
import '../styles/projects.css'

const Projects = () => {
  const projectsData = [
    {
      image: images.Project1,
      name: "Project Management Web",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
    {
      image: images.Project2,
      name: "Travel Website",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
    {
      image: images.Project3,
      name: "Payment Website",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
    {
      image: images.Project4,
      name: "Blockchain Web App",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
    {
      image: images.Project5,
      name: "E-commerce Website",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
    {
      image: images.Project6,
      name: "AI Agent for Designers",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus,ex?",
    },
  ];
  return (
    <>
      <div className="projects-container">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1
                className="text-center"
                style={{
                  color: "#ff6f61",
                  fontSize: "28px",
                  marginTop: "20px",
                  marginBottom: "9px",
                }}
              >
                Projects
              </h1>
              <p className="text-center"
                style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
                What I've built
              </p>
            </div>
          </div>
          <div className="row">
            {projectsData.map((project, index) => {
              return (
                <div className="col-md-4 mt-3 mb-3" key={index}>
                  <Projectcard
                    image={project.image}
                    name={project.name}
                    desc={project.desc}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
