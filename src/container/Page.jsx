import React, { useState, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from '../pages/Services'
import Blogs from "../pages/Blog";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import images from '../assets/images/images'
import "../App.css";
import Projects from "../pages/Projects";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
console.log('Active Section:', activeSection);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef=useRef(null)
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      if (scrollPosition < aboutRef.current?.offsetTop) {
        setActiveSection("home");
      } else if (scrollPosition >= aboutRef.current?.offsetTop && scrollPosition < servicesRef.current?.offsetTop) {
        setActiveSection("about");
      } else if(scrollPosition >= servicesRef.current?.offsetTop && scrollPosition < projectsRef.current?.offsetTop){
        setActiveSection("services")
      } else if(scrollPosition>=projectsRef.current?.offsetTop && scrollPosition < blogRef.current?.offsetTop){
        setActiveSection('projects')
      } else if (scrollPosition >= blogRef.current?.offsetTop && scrollPosition < testimonialsRef.current?.offsetTop) {
        setActiveSection("blog");
      } else if (scrollPosition >= testimonialsRef.current?.offsetTop && scrollPosition < contactRef.current?.offsetTop) {
        setActiveSection("testimonials");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid m-0 p-0 border-box main">
      <div className="container-fluid mb-0 p-0 border-box header">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg w-100 text-white h-100 nav">
              <div className="container navbar-container">
                <a className="navbar-brand d-flex align-items-center" href="#home">
                  <img className="logo" src={images.Logo} alt="logo" />
                </a>

                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <GiHamburgerMenu style={{ fontSize: "30px", color: "#ff6f61" }} />
                </button>

                <div className={`navbar-collapse ${menuOpen ? "show" : "collapse"}`}>
                  <ul className="navbar-nav ms-md-auto me-md-auto align-items-center">
                    <li className={`nav-item ${activeSection === "home" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(homeRef)}>Home</button>
                    </li>
                    <li className={`nav-item ${activeSection === "about" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(aboutRef)}>About</button>
                    </li>
                    <li className={`nav-item ${activeSection === "services" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(servicesRef)}>Services</button>
                    </li>
                    <li className={`nav-item ${activeSection === "projects" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(projectsRef)}>Projects</button>
                    </li>
                    <li className={`nav-item ${activeSection === "blog" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(blogRef)}>Blog</button>
                    </li>
                    <li className={`nav-item ${activeSection === "testimonials" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(testimonialsRef)}>Testimonials</button>
                    </li>
                    <li className={`nav-item ${activeSection === "contact" ? "active-nav" : ""}`}>
                      <button className="nav-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
                    </li>
                  </ul>
                  <Link to="/login" style={{textDecoration:"none"}}><button className="login-button">Login</button></Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div ref={homeRef} id="home"><Home /></div>
      <div ref={aboutRef} id="about"><About /></div>
      <div ref={servicesRef} id="services"><Services/></div>
      <div ref={projectsRef} id="projects"><Projects/></div>
      <div ref={blogRef} id="blogs"><Blogs /></div>
      <div ref={testimonialsRef} id="testimonials"><Testimonials/></div>
      <div ref={contactRef} id="contact"><Contact /></div>
      <Footer />
    </div>
  );
};

export default Page;
