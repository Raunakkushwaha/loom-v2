import * as PostsApi from "../api/PostsRequests"; // ✅ Correct import

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deletePost = (postId, userId) => async (dispatch) => {
  try {
    await PostsApi.deletePost(postId, userId);
    dispatch({ type: "DELETE_POST", payload: postId });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (postId, updatedData) => async (dispatch) => {
  try {
    const { data } = await PostsApi.updatePost(postId, updatedData);
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};
