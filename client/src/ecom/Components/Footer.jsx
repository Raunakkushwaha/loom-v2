import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const FDash = () => {
  return (
    <FooterContainer>
      <div className="container grid grid-footer">
        {/* Logo Column */}
        <div className="logo-col">
          <Link to="/" className="footer-logo">
            <h4>LOOM</h4> {/* Replaced logo image with text */}
          </Link>
          <ul className="social-links">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
          <p className="copyright">
            Copyright &copy; <span className="year">{new Date().getFullYear()}</span> by Loom, Inc. All rights reserved.
          </p>
        </div>

        {/* Address Column */}
        <div className="address-col">
          <p className="footer-heading">Address</p>
          <address className="contacts">
            <p className="address">
              Hansari ,Jhansi , (UP), India (820001)
            </p>
            <p>
              <a href="tel:415-201-6370" className="footer-link">415-201-6370</a>
              <br /><br />
              <a href="Loom@gmail.com" className="footer-link">LOOM@gmail.com</a>
            </p>
          </address>
        </div>

        {/* Account Links Column */}
        <div className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><Link to="/auth" className="footer-link">Create account</Link></li>
            <li><Link to="/chat" className="footer-link">Chat & Messages</Link></li>
            <li><Link to="/cart" className="footer-link">Cart & Order</Link></li>
            <li><Link to="/ecom" className="footer-link">Ecommerce</Link></li>
           
          
          </ul>
        </div>

        {/* Company Links Column */}
        <div className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><Link to="/about" className="footer-link">About Loom</Link></li>
            <li><Link to="/policy" className="footer-link">Privacy & terms</Link></li>
            <li><Link to="/terms" className="footer-link">Terms & Condition</Link></li>
            <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div className="nav-col">
          <p className="footer-heading">Developers</p>
          <ul className="footer-nav">
            <li><Link to="/contact" className="footer-link">Raunak Kushwaha</Link></li>
            <li><Link to="/contact" className="footer-link">Anshika Gupta</Link></li>
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
};

export default FDash;

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, rgba(194,137,80,1) 13%, rgba(81,130,143,1) 43%, rgba(77,93,96,1) 100%);
  color: #fff;
  
  border-top: 1px solid #444;

  .container {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr;
    gap: 2rem;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
  }

  .footer-logo h4 {
   
    margin: 0;
    color: white;
    font-size: 3rem;
  }

  .footer-heading {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
    color: #fff;
  }

  .footer-nav {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }

  .footer-link {
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
    transition: all 0.3s linear;
  }

  .footer-link:hover,
  .footer-link:active {
    color: #f39c12;
  }

  .footer-social {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
  }

  .footer-social a {
    color: #fff;
    font-size: 2.2rem;
    transition: color 0.3s;
  }

  .footer-social a:hover {
    color: #f39c12;
  }

  .copyright {
    font-size: 0.9rem;
    color: #fff;
    margin-top: 1.5rem;
  }

  .contacts {
    font-size: 0.9rem;
    line-height: 1.4;
    color: #fff;
  }

  .address {
    margin-bottom: 1.2rem;
    color: #fff;
  }

  .footer-nav li a {
    text-decoration: none;
    color: #fff;
  }

  .social-links {
    list-style: none;
    display: flex;
    gap: 2.5rem;
    margin-top:20px
    
  }

.logo-col{
color:white;
}
.footer-icon{
color:white;
font-size:2rem;
}
`;
