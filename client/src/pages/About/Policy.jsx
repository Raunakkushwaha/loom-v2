import React from "react";
import styled from "styled-components";
import FileStructure from '../../ecom/Components/FileStructure'

const PolicyPage = () => {
  return (
    <FileStructure>
      <PolicyContainer>
        <div className="content">
          <h1>Privacy and Policy</h1>
          
          <h2>Privacy Policy</h2>
          <p>
            Loom is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit or use our platform.
          </p>
          <p>
            We collect information from you when you register on our site, place an order, subscribe to our newsletter, or interact with our social media. This information may include your name, email address, phone number, and payment details.
          </p>
          <p>
            We use the information we collect to improve your experience on our platform, process transactions, send promotional emails, and provide customer support. We do not sell or trade your personal information to third parties.
          </p>
          
          <h2>Data Security</h2>
          <p>
            Loom takes data security seriously and uses a variety of security measures to protect your personal information. We utilize SSL encryption to ensure that your personal and payment information is secure during transmission.
          </p>
          
          <h2>Cookies</h2>
          <p>
            Loom uses cookies to enhance your experience on our platform. Cookies help us remember your preferences and personalize content. You can disable cookies in your browser settings, but please note that some features may not function correctly.
          </p>
          
          <h2>Third-Party Services</h2>
          <p>
            Loom may share your personal information with third-party service providers that help us operate our platform, such as payment processors and shipping companies. These service providers are obligated to protect your information and use it only for the purposes for which it was provided.
          </p>
          
          <h2>Terms and Conditions</h2>
          <p>
            By using Loom, you agree to comply with our Terms and Conditions. These terms outline the rules and guidelines for using our platform, including limitations on liability, intellectual property rights, and prohibited activities.
          </p>

          <h2>Changes to the Policy</h2>
          <p>
            Loom reserves the right to update this Privacy and Policy page at any time. When we do, we will post the updated policy on this page with the date of the revision. We encourage you to review this page periodically to stay informed about how we are protecting your information.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, Terms and Conditions, or any other concerns, please feel free to contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:LOOM@gmail.com">LOOM@gmail.com</a></li>
            <li>Phone: <a href="tel:+91-1234567890">+91-1234567890</a></li>
            <li>Address: Jhansi, Uttar Pradesh, India</li>
          </ul>
        </div>
      </PolicyContainer>
    </FileStructure>
  );
};

export default PolicyPage;

const PolicyContainer = styled.div`
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
