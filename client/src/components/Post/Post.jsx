import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { likePost, updatePost, deletePost } from "../../api/PostsRequests";
import { useSelector } from "react-redux";

const Post = ({ data }) => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);
  const [editing, setEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(data.desc);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleUpdate = async () => {
    try {
      await updatePost(data._id, { desc: newDesc, userId: user._id });
      setEditing(false);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(data._id, user._id);
      alert("Post deleted successfully!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="Post">
      <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt="" />

      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" style={{ cursor: "pointer" }} onClick={handleLike} />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>{likes} likes</span>

      <div className="detail">
        <span><b>{data.name} </b></span>
        {editing ? (
          <input 
          className="edit"
            type="text" 
            value={newDesc} 
            onChange={(e) => setNewDesc(e.target.value)}
          />
        ) : (
          <span>{data.desc}</span>
        )}
      </div>

      {/* Only show update & delete buttons for post owner */}
      {data.userId === user._id && (
        <div className="postActions">
          {editing ? (
            <button onClick={handleUpdate} className="button fc-button">Save</button>
          ) : (
            <button onClick={() => setEditing(true)} className="button fc-button">Edit</button>
          )}
          <button onClick={handleDelete} className="button fc-button">Delete</button>
        </div>
      )}
    </div>
  );
};

export default Post;
