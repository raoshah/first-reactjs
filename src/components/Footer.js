import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={{ textAlign: 'center' }}>
       
        
     

          <h4>Contact Us</h4>
          
          <p>raosharetails@gmail.com <a href="tel:9269562264" style={linkStyle}>9269562264</a></p>
    
        <div>
          <Link to="/terms" style={linkStyle}>
            Terms of Service
          </Link>
          {' | '}
          <Link to="/privacy" style={linkStyle}>
            Privacy Policy
          </Link>
          {' | '}
          <Link to="/refund" style={linkStyle}>
            Refund Policy
          </Link>
          {' | '}
          <Link to="/shippolicy" style={linkStyle}>
            Shipping Policy
          </Link>
        </div>

        <p>&copy; {new Date().getFullYear()} Raosha Fashion. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#f8f9fa',
  padding: '2px 0',
  borderTop: '1px solid #eaeaea',
  bottom: '0',
  width: '100%',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  margin: '0 10px',
};

export default Footer;
