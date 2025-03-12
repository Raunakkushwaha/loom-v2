import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createPost = (postData) => API.post("/posts", postData);
export const getPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, postData) => API.put(`/posts/${id}`, postData);
export const deletePost = (id, userId) => API.delete(`/posts/${id}`, { data: { userId } });
export const getTimelinePosts = (id) => API.get(`/posts/timeline/${id}`);
