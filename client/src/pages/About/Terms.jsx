import React from "react";
import styled from "styled-components";
import FileStructure from '../../ecom/Components/FileStructure'

const Terms = () => {
  return (
    <FileStructure>
      <TermsContainer>
        <div className="content">
          <h1>Terms and Conditions</h1>

          <h2>Introduction</h2>
          <p>
            Welcome to Loom! By using our platform, you agree to comply with the following terms and conditions. Please read these terms carefully before accessing or using our services. If you do not agree with these terms, you must refrain from using our platform.
          </p>

          <h2>Use of the Platform</h2>
          <p>
            Loom provides a platform for social interaction and e-commerce. You may use our platform to connect with others, share content, and engage in buying and selling activities. You agree to use Loom solely for lawful purposes and in accordance with our community guidelines.
          </p>

          <h2>User Accounts</h2>
          <p>
            To access certain features of Loom, you may be required to create a user account. You agree to provide accurate and complete information during the registration process and to update your account information as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            The content, features, and functionality of Loom, including but not limited to text, images, graphics, logos, and software, are the property of Loom and protected by copyright and intellectual property laws. You agree not to use any of our intellectual property without prior written consent.
          </p>

          <h2>User Content</h2>
          <p>
            By posting or uploading content to Loom, including text, images, and videos, you grant Loom a non-exclusive, royalty-free, transferable, sub-licensable, and worldwide license to use, display, modify, and distribute that content for the purpose of operating, promoting, and improving the platform.
          </p>
          <p>
            You retain ownership of your content, but you agree not to post any content that violates the rights of others, including intellectual property rights, privacy rights, or any content that is illegal, defamatory, or offensive.
          </p>

          <h2>Prohibited Activities</h2>
          <p>
            You agree not to engage in any of the following activities while using Loom:
          </p>
          <ul>
            <li>Engaging in fraudulent or illegal activities</li>
            <li>Posting or sharing offensive, harmful, or discriminatory content</li>
            <li>Impersonating any person or entity, including Loom employees or representatives</li>
            <li>Interfering with or disrupting the operation of the platform</li>
            <li>Engaging in activities that may harm Loom or its users in any way</li>
          </ul>

          <h2>Payment and Transactions</h2>
          <p>
            Loom provides a secure platform for users to buy and sell products. All transactions, including purchases and sales, are subject to Loom’s terms. By making a purchase, you agree to pay the indicated price, including applicable taxes and fees. Loom is not responsible for disputes between buyers and sellers.
          </p>
          <p>
            We use trusted third-party payment processors to handle all transactions. You agree to provide accurate payment information and authorize Loom and the payment processor to process payments on your behalf.
          </p>

          <h2>Termination</h2>
          <p>
            Loom reserves the right to suspend or terminate your account if you violate any of these Terms and Conditions. We may also suspend or terminate your access to the platform for any reason, including if we believe your actions harm the integrity of the platform.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Loom is not responsible for any damages, losses, or other consequences that result from your use or inability to use the platform, including but not limited to errors, omissions, interruptions, or delays in service. You use Loom at your own risk, and we do not warrant the accuracy or reliability of the platform.
          </p>

          <h2>Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold Loom and its affiliates harmless from any claims, damages, losses, or liabilities arising from your use of the platform or your violation of these Terms and Conditions.
          </p>

          <h2>Changes to Terms</h2>
          <p>
            Loom reserves the right to modify or update these Terms and Conditions at any time. When we do, we will post the updated terms on this page and include the date of the revision. By continuing to use the platform after any changes are made, you agree to be bound by the updated terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms and Conditions are governed by the laws of India. Any disputes arising from the use of Loom will be subject to the jurisdiction of the courts in Jhansi, Uttar Pradesh, India.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms and Conditions or need further clarification, please feel free to contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:LOOM@gmail.com">LOOM@gmail.com</a></li>
            <li>Phone: <a href="tel:+91-1234567890">+91-1234567890</a></li>
            <li>Address: Jhansi, Uttar Pradesh, India</li>
          </ul>
        </div>
      </TermsContainer>
    </FileStructure>
  );
};

export default Terms;

const TermsContainer = styled.div`
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
