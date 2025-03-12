import * as UserApi from "../api/UserRequests";

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATING_START" });

    try {
        const { data } = await UserApi.updateUser(id, formData);
        console.log("Updated User Data:", data);

        dispatch({ type: "UPDATING_SUCCESS", data: data });
    } catch (error) {
        console.error("Error updating user:", error.response?.data || error);
        dispatch({ type: "UPDATING_FAIL", error: error.response?.data || "Update failed" });
    }
};

export const followUser = (id, data) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER", data: id });

    try {
        await UserApi.followUser(id, data);
    } catch (error) {
        console.error("Error following user:", error.response?.data || error);
        dispatch({ type: "FOLLOW_FAIL", error: error.response?.data || "Follow failed" });
    }
};

export const unfollowUser = (id, data) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW_USER", data: id });

    try {
        await UserApi.unfollowUser(id, data);
    } catch (error) {
        console.error("Error unfollowing user:", error.response?.data || error);
        dispatch({ type: "UNFOLLOW_FAIL", error: error.response?.data || "Unfollow failed" });
    }
};
