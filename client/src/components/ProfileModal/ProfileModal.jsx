import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/UploadAction";
import { updateUser } from "../../actions/UserAction";

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme();
  const { password, ...other } = data;
  const [formData, setFormData] = useState({
    ...other,
    address: other.address || { street: "", city: "", state: "", country: "", zip: "" },
  });

  console.log("form data ==> ",formData)

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();

  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        address: { ...prev.address, [field]: value },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage" ? setProfileImage(img) : setCoverImage(img);
    }
  };

  const uploadFile = async (file) => {
    if (!file) return null;
    
    const data = new FormData();
    const fileName = Date.now() + file.name;
    data.append("name", fileName);
    data.append("file", file);
    
    try {
      await dispatch(uploadImage(data));
      return fileName; // Return file name for updating user data
    } catch (err) {
      console.error("Error uploading image:", err);
      return null;
    }
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let updatedUserData = { ...formData };

    if (profileImage) {
      const profileFileName = await uploadFile(profileImage);
      if (profileFileName) updatedUserData.profilePicture = profileFileName;
    }

    if (coverImage) {
      const coverFileName = await uploadFile(coverImage);
      if (coverFileName) updatedUserData.coverPicture = coverFileName;
    }

    try {
      await dispatch(updateUser(param.id, updatedUserData));
      setModalOpened(false);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <Modal
      overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Update Your Info</h3>

        {/* Full Name */}
        <div>
          <input
            value={formData.firstname}
            onChange={handleChange}
            type="text"
            placeholder="First Name"
            name="firstname"
            className="infoInput"
          />
          <input
            value={formData.lastname}
            onChange={handleChange}
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoInput"
          />
        </div>

        {/* Username */}
        <div>
          <input
            value={formData.username}
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
            className="infoInput"
          />
        </div>

        {/* Email & Phone */}
        <div>
          <input
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
            name="email"
            className="infoInput"
          />
          <input
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className="infoInput"
          />
        </div>

        {/* Role */}
        <div>
          <select
            value={formData.role}
            onChange={handleChange}
            name="role"
            className="infoInput"
          >
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
        </div>

        {/* Address Schema */}
        <h4>Address</h4>
        <div>
          <input
            value={formData.address?.street}
            onChange={handleChange}
            type="text"
            placeholder="Street Address"
            name="address.street"
            className="infoInput"
          />
        </div>
        <div>
          <input
            value={formData.address?.city}
            onChange={handleChange}
            type="text"
            placeholder="City"
            name="address.city"
            className="infoInput"
          />
          <input
            value={formData.address?.state}
            onChange={handleChange}
            type="text"
            placeholder="State"
            name="address.state"
            className="infoInput"
          />
        </div>
        <div>
          <input
            value={formData.address?.country}
            onChange={handleChange}
            type="text"
            placeholder="Country"
            name="address.country"
            className="infoInput"
          />
          <input
            value={formData.address?.zip}
            onChange={handleChange}
            type="text"
            placeholder="Zip Code"
            name="address.zip"
            className="infoInput"
          />
        </div>

        {/* Previous Profile Details */}
        <div>
          <input
            value={formData.worksAt}
            onChange={handleChange}
            type="text"
            placeholder="Works at"
            name="worksAt"
            className="infoInput"
          />
        </div>

        <div>
          <input
            value={formData.relationship}
            onChange={handleChange}
            type="text"
            placeholder="Relationship status"
            name="relationship"
            className="infoInput"
          />
        </div>

        {/* Profile & Cover Image Upload */}
        <div>
          <span>Profile image</span>
          <input type="file" name="profileImage" onChange={onImageChange} />
          <span>Cover image</span>
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>

        <button className="button infoButton" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
};

export default ProfileModal;
