import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;
  }
  return req;
});

// ✅ Ensure these functions are properly defined and exported
export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`);
export const likePost = (id, userId) => API.put(`/posts/${id}/like`, { userId });

export const deletePost = (postId, userId) => 
  API.delete(`/posts/${postId}`, { data: { userId } });

export const updatePost = (postId, updatedData) => 
  API.put(`/posts/${postId}`, updatedData);
