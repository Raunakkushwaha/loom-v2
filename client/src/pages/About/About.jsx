import React from "react";
import styled from "styled-components";
import FileStructure from '../../ecom/Components/FileStructure'

const AboutPage = () => {
  return (
        <FileStructure>
    <AboutContainer>

      <div className="content">
        <h1>About Loom</h1>
        <p>
          Loom is an innovative platform that merges the best of social media with an integrated e-commerce experience. Our platform enables users to seamlessly connect with friends, family, and communities while also exploring a vast marketplace for buying, selling, and trading products. At Loom, we believe in enhancing the digital experience by offering a space where people can interact, engage, and transact all in one place.
        </p>
        
        <p>
          Loom was founded with a simple goal in mind: to bridge the gap between social interaction and e-commerce. Social media has become an essential part of daily life, and online shopping has revolutionized the way we buy and sell. Loom combines these two worlds by providing a platform that encourages people to share, chat, and shop—all in one seamless ecosystem. Whether you're browsing for the latest fashion trends, participating in a live chat, or discovering new products, Loom has something for everyone.
        </p>

        <h2>Our Vision</h2>
        <p>
          At Loom, our vision is to empower individuals to create connections, engage in meaningful interactions, and discover products that enhance their lives. By combining social media with e-commerce, we aim to build a community-driven platform that brings people closer together while simplifying the shopping experience.
        </p>
        
        <h2>Our Features</h2>
        <p>
          Loom offers a variety of features designed to enhance the user experience, foster community engagement, and simplify online shopping. Here are some of the most popular features of our platform:
        </p>
        <ul>
          <li><strong>Social Media Interaction</strong>: Loom allows users to interact with friends, family, and followers through posts, photos, videos, and status updates. It's the perfect space for sharing life moments, opinions, and experiences.</li>
          <li><strong>Real-time Chat</strong>: Engage with people in real-time using our secure, private chat feature. Whether you’re having one-on-one conversations or in group chats, Loom’s chat functionality ensures smooth and uninterrupted communication.</li>
          <li><strong>Personalized E-commerce</strong>: Loom provides an integrated shopping experience where users can explore, browse, and purchase products from various categories, including fashion, electronics, home goods, and more. Our platform is designed to offer personalized product recommendations based on user preferences.</li>
          <li><strong>Secure Payment Gateway</strong>: We ensure that your transactions are safe and hassle-free. Loom integrates trusted payment gateways to provide users with secure checkout options for both domestic and international purchases.</li>
          <li><strong>Buy & Sell Marketplace</strong>: Users can not only buy products but also list and sell their own items, creating a dynamic and interactive marketplace within the Loom platform. It’s a great place to discover new products and get great deals.</li>
          <li><strong>Profile Customization</strong>: Customize your profile to reflect your interests, style, and preferences. With Loom’s easy-to-use interface, you can edit your profile, upload photos, and showcase your products or content with ease.</li>
          <li><strong>Shopping Cart & Wishlist</strong>: Our user-friendly cart and wishlist features allow you to easily manage your purchases. Add products to your cart and proceed to checkout when you’re ready or save items in your wishlist for future purchase.</li>
        </ul>

        <h2>Why Choose Loom?</h2>
        <p>
          Loom is more than just another social media platform. It’s an integrated solution designed to connect people and make online shopping an enjoyable experience. Whether you're socializing with friends, exploring new trends, or making a purchase, Loom simplifies it all.
        </p>

        <p>
          What sets Loom apart is its emphasis on community and ease of use. We aim to make socializing and shopping feel natural and intuitive. We believe that the best experiences happen when social interactions are combined with practical solutions. Loom is built with this philosophy at its core, creating a space where people can share, shop, and connect effortlessly.
        </p>

        <h2>Our Mission</h2>
        <p>
          Loom’s mission is to provide a platform that offers both social interaction and e-commerce in a single, cohesive experience. Our goal is to create a vibrant community where users can engage with others and shop for products in a convenient, secure, and personalized environment.
        </p>

        <p>
          At Loom, we are committed to continuous innovation, ensuring that our platform evolves to meet the needs of our users. Whether it’s enhancing user experience, expanding our marketplace, or providing better customer support, we are always striving to improve.
        </p>

        <h2>Our History</h2>
        <p>
          Loom was founded in 2022 by a group of visionaries with backgrounds in technology, e-commerce, and social media. After recognizing the lack of platforms that truly combine social interaction and e-commerce, the founders decided to create Loom as a way to bring these two worlds together in a seamless, user-friendly platform.
        </p>

        <p>
          What started as a simple idea quickly grew into a powerful platform that now supports millions of users worldwide. Loom continues to expand, with a growing marketplace, an evolving social network, and new features added regularly to enhance the experience for our users.
        </p>

        <h2>Our Values</h2>
        <p>
          At Loom, we uphold a set of values that guide everything we do. These values are what make our platform unique and are integral to our mission of providing a safe, inclusive, and engaging space for everyone.
        </p>
        <ul>
          <li><strong>Innovation</strong>: We are committed to continuously evolving our platform to meet the changing needs of our users.</li>
          <li><strong>Community</strong>: Our platform is built on the foundation of community and collaboration, where users can connect, share, and support each other.</li>
          <li><strong>Security</strong>: We prioritize the safety and security of our users’ data and transactions. Loom uses advanced encryption and secure payment methods to ensure your information is always protected.</li>
          <li><strong>Customer Satisfaction</strong>: We strive to provide exceptional service and support to our users. Our team is always ready to assist with any questions or issues you may have.</li>
          <li><strong>Integrity</strong>: We believe in transparency, honesty, and fairness. Loom operates with the utmost integrity, ensuring that our users’ interests come first.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>If you have any questions, suggestions, or need assistance, don't hesitate to get in touch with us. We are always here to help!</p>
        <ul>
          <li>Email: <a href="mailto:LOOM@gmail.com">LOOM@gmail.com</a></li>
          <li>Phone: <a href="tel:+91-1234567890">+91-1234567890</a></li>
          <li>Address: Jhansi, Uttar Pradesh, India</li>
        </ul>

        <h2>Join the Loom Community</h2>
        <p>
          Ready to experience the best of social media and e-commerce? Join the Loom community today! Whether you're looking to make new connections, shop for products, or start your own business, Loom has something to offer. 
        </p>

        <p>
          Sign up now and start engaging with like-minded individuals, shopping for unique products, and enjoying all the benefits that Loom has to offer. Let us show you how the fusion of social media and e-commerce can transform your digital experience!
        </p>
      </div>
    </AboutContainer>
    </FileStructure>
  );
};

export default AboutPage;

const AboutContainer = styled.div`
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
