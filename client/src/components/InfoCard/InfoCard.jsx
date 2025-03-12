import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequests.js";
import { logout } from "../../actions/AuthActions";

const InfoCard = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [modalOpened, setModalOpened] = useState(false);
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});
  const { user } = useSelector((state) => state.authReducer.authData);
  console.log("user in profile ==> ",user)

  const handleLogOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user?._id) {
        setProfileUser(user);
      } else {
        console.log("Fetching user details...");
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
        console.log(profileUser);
      }
    };
    fetchProfileUser();
  }, [user, profileUserId]);

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user?._id === profileUserId && (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setModalOpened(true)}
            />
            <ProfileModal
              modalOpened={modalOpened}
              setModalOpened={setModalOpened}
              data={user}
            />
          </div>
        )}
      </div>

      {/* Full Name */}
      <div className="info">
        <span><b>Full Name: </b></span>
        <span>{profileUser?.firstname || "N/A"} {profileUser?.lastname || ""}</span>
      </div>

      {/* Username */}
      <div className="info">
        <span><b>Username: </b></span>
        <span>{profileUser?.username || "N/A"}</span>
      </div>

      {/* Email */}
      <div className="info">
        <span><b>Email: </b></span>
        <span>{profileUser?.email || "N/A"}</span>
      </div>

      {/* Phone Number */}
      <div className="info">
        <span><b>Phone: </b></span>
        <span>{profileUser?.phone || "N/A"}</span>
      </div>

      {/* Role */}
      <div className="info">
        <span><b>Role: </b></span>
        <span>{profileUser?.role === "seller" ? "Seller" : "Buyer"}</span>
      </div>

      {/* Address Section */}
      <div className="info">
        <span><b>Address: </b></span>
        <span>
          {profileUser?.address
            ? `${profileUser.address.street || "N/A"}, ${profileUser.address.city || "N/A"}, ${profileUser.address.state || "N/A"}, ${profileUser.address.country || "N/A"} - ${profileUser.address.zip || "N/A"}`
            : "Not provided"}
        </span>
      </div>

      {/* Status */}
      <div className="info">
        <span><b>Status: </b></span>
        <span>{profileUser?.relationship || "Not specified"}</span>
      </div>

      {/* Lives In */}
      <div className="info">
        <span><b>Lives in: </b></span>
        <span>{profileUser?.livesIn || "Not specified"}</span>
      </div>

      {/* Works At */}
      <div className="info">
        <span><b>Works at: </b></span>
        <span>{profileUser?.worksAt || "Not specified"}</span>
      </div>

      {/* Logout Button */}
      <button className="button logout-button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};

export default InfoCard;
