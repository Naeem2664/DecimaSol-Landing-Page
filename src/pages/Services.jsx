import React from "react";
import ServiceCard from "../components/ServiceCard";
import { FaCode,FaWordpress,FaPencil } from "react-icons/fa6";
import '../styles/services.css'

const Services = () => {
    const serviceData=[
        {
            title:'Web Development',
            icon:<FaCode/>,
            description:'Comprehensive web development services that cover both front-end and back-end, delivering scalable, secure, and user-friendly digital solutions to help your business thrive online.'
        },
        {
            title:'WordPress Development',
            icon:<FaWordpress/>,
            description: 'We build dynamic and user-friendly websites using WordPress, tailored to meet your business goals with easy content management and a polished design.'        
        },
        {
            title:'UI/UX Design',
            icon:<FaPencil/>,
            description: 'We craft intuitive and engaging user experiences with clean, user-friendly interfaces that elevate your brand and keep your audience coming back.'        
        },

    ]
  return (
    <>
      <div className="services-container">
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
                Services
              </h1>
              <p className="text-center"
                style={{ fontSize: "2.5rem", marginBottom: "30px" }}>
                How may I help you
              </p>
            </div>
          </div>
          <div className="row">
            {serviceData.map((service,index)=>{
                return(
                    <div className="col-md-4 mt-2 mb-2" key={index}>
                        <ServiceCard title={service.title} icon={service.icon} description={service.description} />
                    </div>
                )})}
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;
