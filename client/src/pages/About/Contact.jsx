import React from 'react';
import styled from 'styled-components';
import FileStructure from '../../ecom/Components/FileStructure';

const Contact = () => {
  return (
    <FileStructure>
      <ContactContainer>
        <div className="content">
          <h1>Contact Us</h1>
          <p>If you have any questions, feedback, or need assistance, feel free to reach out to us!</p>
          
          <h2>Our Contact Details</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:LOOM@gmail.com">LOOM@gmail.com</a></li>
            <li><strong>Phone:</strong> <a href="tel:+91-1234567890">+91-1234567890</a></li>
            <li><strong>Address:</strong> Jhansi, Uttar Pradesh, India</li>
          </ul>

          <h2>Connect with Us on LinkedIn</h2>
          <ul>
            <li><strong>Raunak Kushwaha:</strong> <a href="https://www.linkedin.com/in/raunac00/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li><strong>Anshika Gupta:</strong> <a href="https://www.linkedin.com/in/anshika-gupta-a9164323b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
          </ul>

          <h2>Follow Us</h2>
          <p>Stay connected and keep up with the latest updates on Loom by following us on our social media channels.</p>
        </div>
      </ContactContainer>
    </FileStructure>
  );
};

export default Contact;

const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #f5f5f5;
  color: #333;

  .content {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 3rem;
    color: #f99827;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 2rem;
    color: #f39c12;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: #555;
  }

  ul {
    list-style: none;
    margin-top: 1.5rem;
  }

  ul li {
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    color: #555;
  }

  a {
    color: #f39c12;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
