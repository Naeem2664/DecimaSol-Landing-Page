import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

import '../styles/footer.css'
export default function App() {
  return (
    <div className="footer">
      <MDBFooter bgColor='dark' className='text-center text-white text-lg-start'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='footer-social-links'>
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