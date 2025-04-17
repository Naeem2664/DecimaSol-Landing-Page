import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaLinkedin,FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { fontsColor } from '../assets/fonts/colors';
import '../styles/footer.css'
export default function App() {
  return (
    <div className="footer">
      <MDBFooter bgColor='dark' className='text-center text-white text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebook style={{color:fontsColor.red,fontSize:'25px'}} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaTwitter style={{color:fontsColor.red,fontSize:'25px'}} />
          </a>
          
          <a href='' className='me-4 text-reset'>
            <FaInstagram style={{color:fontsColor.red,fontSize:'25px'}} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedin style={{color:fontsColor.red,fontSize:'25px'}} />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaGithub style={{color:fontsColor.red,fontSize:'25px'}}/>
          </a>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright:
        <a className='text-reset fw-bold' href='#'>
          Naeem.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
  );
}