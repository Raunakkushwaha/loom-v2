import React, { useState } from "react";
import "./Auth.css";
import { logIn, signUp } from "../../actions/AuthActions.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpass: "",
    role: "user",
    profilePicture: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  };

  const loading = useSelector((state) => state.authReducer.loading);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState(initialState);
  const [confirmPass, setConfirmPass] = useState(true);

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(true);
  };

  // Handle Change in Input Fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setData({ ...data, [name]: value });
    }
  };

  // Handle Profile Picture Upload
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setData({ ...data, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmPass(true);

    if (isSignUp) {
      if (data.password !== data.confirmpass) {
        setConfirmPass(false);
        return;
      }
      dispatch(signUp(data, navigate));
    } else {
      dispatch(logIn(data, navigate));
    }
  };

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="a-left">
        <div className="Webname">
          <h1>LOOM Social & Ecom</h1>
          <h6>Explore and Shop in One Place</h6>
        </div>
      </div>

      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Register" : "Login"}</h3>

          {isSignUp && (
            <>
              <div>
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="infoInput"
                  name="firstname"
                  value={data.firstname}
                  onChange={handleChange}
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="infoInput"
                  name="lastname"
                  value={data.lastname}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="infoInput"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <input
                  required
                  type="text"
                  placeholder="Phone Number"
                  className="infoInput"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label style={{ fontSize: "14px", marginRight: "10px" }}>
                  Register As:
                </label>
                <select
                  name="role"
                  value={data.role}
                  onChange={handleChange}
                  className="infoInput"
                >
                  <option value="user">Buyer</option>
                  <option value="seller">Seller</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              {/* Address Fields */}
              <div>
                <input
                  type="text"
                  placeholder="Street"
                  className="infoInput"
                  name="address.street"
                  value={data.address.street}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="infoInput"
                  name="address.city"
                  value={data.address.city}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="State"
                  className="infoInput"
                  name="address.state"
                  value={data.address.state}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="ZIP Code"
                  className="infoInput"
                  name="address.zip"
                  value={data.address.zip}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Country"
                  className="infoInput"
                  name="address.country"
                  value={data.address.country}
                  onChange={handleChange}
                />
              </div>

              {/* Profile Picture Upload */}
              <div>
                <label>Upload Profile Picture:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                />
              </div>
            </>
          )}

          <div>
            <input
              required
              type="text"
              placeholder="Username"
              className="infoInput"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <input
              required
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {isSignUp && (
              <input
                required
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
              />
            )}
          </div>

          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmPass ? "none" : "block",
            }}
          >
            * Confirm password does not match
          </span>

          <div>
            <span
              style={{
                fontSize: "12px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={() => {
                resetForm();
                setIsSignUp((prev) => !prev);
              }}
            >
              {isSignUp
                ? "Already have an account? Login"
                : "Don't have an account? Sign up"}
            </span>

            <button
              className="button infoButton"
              type="Submit"
              disabled={loading}
            >
              {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
