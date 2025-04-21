import React from "react";
import "../styles/contact.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h1
                className="text-center"
                style={{
                  color: "#ff6f61",
                  fontSize: "28px",
                  marginTop: "20px",
                  marginBottom: "9px",
                }}>
                Contact
              </h1>
              <p className="text-center" style={{fontSize:'2.5rem',marginBottom:'30px'}}>Get in touch</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 mb-5">
              <div style={{ width: "100%", height: "400px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.886523098993!2d73.0753470815453!3d33.66010208318396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa21b669c4f87bdff%3A0xb82073d15173bbc5!2sDecimal%20Solution!5e0!3m2!1sen!2sus!4v1744796649028!5m2!1sen!2sus"
                  width="100%"
                  title="Google Map"
                  height="480"
                  style={{border:0}}
                  allowfullscreen
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-md-5 contact-info">
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email"  id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <br />
                    <input type="tel"  id="phone" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea
                      id="message"
                      rows="5"
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
