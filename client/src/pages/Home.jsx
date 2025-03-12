import React from "react";
import PostSide from "../components/PostSide/PostSide";
import ProfileSide from "../components/profileSide/ProfileSide";
import RightSide from "../components/RightSide/RightSide";
import NavBar from "../ecom/Components/NavBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="Home">
      <NavBar/>
      <ProfileSide/>
      <PostSide />
      <RightSide />
    </div>
  );
};

export default Home;
