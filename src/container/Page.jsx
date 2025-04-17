import React from "react";
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
                        <a className="nav-link" href="#home">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#about">
                          About
                        </a>
                      </li>
                      
                      <li className="nav-item">
                        <a className="nav-link" href="#blogs">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#testimonials">
                          Testimonials
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="blogs">
          <Blogs />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
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
