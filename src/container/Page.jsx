import React, { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "../pages/Home";
import About from "../pages/About";
import Blogs from "../pages/Blog";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Footer from "../layout/Footer";
import "../App.css";
const Page = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  console.log(import.meta.env.VITE_REACT_APP_LOGIN_PASSWORD)
  const homeRef=useRef(null)
  const aboutRef=useRef(null)
  const blogRef=useRef(null)
  const testimonialsRef=useRef(null)
  const contactRef=useRef(null)

  return (
    <>
      <div className="container-fluid m-0 p-0 border-box main">
        <div className="container-fluid mb-0 p-0 border-box header">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg w-100 text-white h-100 nav">
                <div className="container navbar-container">
                  <a
                    className="navbar-brand d-flex align-items-center"
                    href="#home"
                  >
                    <h4>Naeem</h4>
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    <GiHamburgerMenu
                      style={{ fontSize: "30px", color: "#800080" }}
                    />
                  </button>
                  <div
                    className={`navbar-collapse ${
                      menuOpen ? "show" : "collapse"
                    }`}
                  >
                    <ul className="navbar-nav ms-md-auto me-md-auto align-items-center">
                      <li className="nav-item active">
                        <button className="nav-link" onClick={()=>homeRef.current?.scrollIntoView({behavior:"smooth"})}>
                          Home
                        </button>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={()=>aboutRef.current?.scrollIntoView({behavior:"smooth"})}>
                          About
                        </a>
                      </li>
                      
                      <li className="nav-item">
                        <button className="nav-link" onClick={()=>blogRef.current?.scrollIntoView({behavior:"smooth"})}>
                          Blog
                        </button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link" onClick={()=>testimonialsRef.current?.scrollIntoView({behavior:"smooth"})}>
                          Testimonials
                        </button>
                      </li>
                      <li className="nav-item">
                        <button className="nav-link" onClick={()=>contactRef.current?.scrollIntoView({behavior:"smooth"})}>
                          Contact
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div ref={homeRef} id="home">
          <Home />
        </div>
        <div ref={aboutRef} id="about">
          <About />
        </div>
        <div ref={blogRef} id="blogs">
          <Blogs />
        </div>
        <div ref={testimonialsRef} id="testimonials">
          <Testimonials />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
        <div id="footer">
         
         <Footer/>
        </div>
      </div>
    </>
  );
};

export default Page;
