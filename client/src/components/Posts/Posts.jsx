import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTimelinePosts } from "../../actions/PostsAction";
import Post from "../Post/Post";
import "./Posts.css";

const Posts = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  const { posts, loading, error } = useSelector((state) => state.postReducer);

  useEffect(() => {
    if (user?._id) {
      dispatch(getTimelinePosts(user._id));
    }
  }, [dispatch, user?._id]); // Added dependency for proper updates

  if (loading) return <p>Fetching posts...</p>;
  if (error) return <p>Error fetching posts!</p>;
  if (!posts || posts.length === 0) return <p>No Posts Available</p>;

  return (
    <div className="Posts">
      {posts.map((post, id) => (
        <Post data={post} key={id} />
      ))}
    </div>
  );
};

export default Posts;
