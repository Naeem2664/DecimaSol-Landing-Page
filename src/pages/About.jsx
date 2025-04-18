import React from "react";
import "../styles/about.css";
import ProfileCard from "../components/ProfileCard";
import Skill from '../components/Skill'
const About = () => {
  const skillsData = [
    { name: 'JavaScript', level: 80 },
    { name: 'Next.js', level: 70 },
    { name: 'React', level: 75 },
    { name: 'CSS', level: 80 },
    { name: 'Node.js', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'Express.js', level: 80 },
    { name: 'HTML', level: 95 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 70 },
    { name: 'REST APIs', level: 75 },
    { name: 'GraphQL', level: 60 },
    { name: 'Redux', level: 70 },
    { name: 'TypeScript', level: 60 },
    { name: 'Firebase', level: 70 },
    { name: 'Docker', level: 50 },
    { name: 'AWS', level: 45 },
  ];
  
  return (
    <>
    <div className="about">
      <div className="intro">
      <div className="container py-5 mt-3">
        <div className="row ms-auto me-auto mt-5">
          <div class="col-lg-4 mt-3">
           <ProfileCard/>
          </div>
          <div className="col-lg-8  ps-auto pl-5">
            <div className="content">
            <h3 className="fw-light">Muhammad Naeem</h3>
            <h5 className="fg-theme mb-3">
              Software Engineer | MERN Stack Developer
            </h5>
            <p className="mb-4">
              I am a full stack developer with experience in building web
              applications using React, Node.js, and MongoDB. I am passionate
              about coding and always eager to learn new technologies.
            </p>
            <div class="info-container">
              <div class="info-item">
                <div class="bullet"></div>
                <span>From: Sadiqabad, Pakistan</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span>Lives In: Islamabad, Pakistan</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span>Age: 25</span>
              </div>
              <div class="info-item">
                <div class="bullet"></div>
                <span>Gender: Male</span>
              </div>
            </div>
            <button>Download CV</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="container-fluid">
    <div className="skills">
      <div className="container">
      <div className="row ">
          <div className="col-md-12 text-center">
            <h5>My Skills</h5>
          </div>
        </div>
        <div className="row">
          {skillsData.map((skill, index) => (
            <div className="col-md-4 mb-3" key={index}>
              <Skill name={skill.name} level={skill.level}/>
            </div>
          ))}
        </div>
      </div>
        
      </div>
    </div>
    </div>
     
    </>
  );
};

export default About;
