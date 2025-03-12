import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "antd";
import { useSelector } from "react-redux";

import Home from "../../img/home.png";
import setting from "../../img/profile.png";
import Noti from "../../img/notifi.png";
import conver from "../../img/conver.png";
import Ecom from "../../img/ecom.png";
import order from "../../img/order.png";
import cart from "../../img/shop.png";
import admin from "../../img/admin.png"

const NavIcons = ({ isEcom = false, user, cartProduct }) => {
  return (
    <div className="navIcons" style={isEcom ? { flex: 1, justifyContent: "space-around" } : {}}>
      <Link to="/home">
        <img src={Home} alt="" />
      </Link>

      <Link to={`/profile/${user?.user?._id}`}>
        <img src={setting} alt="" />
        {user?.username}
      </Link>

      <img src={Noti} alt="" />
      
      <Link to="/chat">
        <img src={conver} alt="" />
      </Link>

      <Link to="/ecom">
        <img src={Ecom} alt="" />
      </Link>

      {isEcom && (
        <>
          <Link to={"/dashboard/user/orders"}>
            <img src={order} alt="" />
          </Link>

          <Link to={"/cart"}>
            <img src={cart} alt="" />
            {user?.token && <Badge count={cartProduct?.length > 0 ? cartProduct?.length : 0} />}
          </Link>
        </>
      )}

      {/* Show Dashboard Admin Link only for Sellers and Admins */}
      {(user?.user?.role === "seller" || user?.user?.role === "admin") && (
        <Link to="/dashboard/admin">
          <img src={admin} alt="" />
        </Link>
      )}
    </div>
  );
};

export default NavIcons;
