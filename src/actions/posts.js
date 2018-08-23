import axios from "axios";
import { API, SUBMIT_ERROR, SUBMIT_SUCCESS, LOAD_POSTS } from "../constants";

const submitSuccess = () => {
  return {
    type: SUBMIT_SUCCESS,
    payload: {
      isSubmitted: true
    }
  };
};

const submitError = () => {
  return {
    type: SUBMIT_ERROR,
    payload: {
      isSubmitted: false
    }
  };
};

const loadPosts = data => {
  return {
    type: LOAD_POSTS,
    payload: data
  };
};

export const submitPost = (data, caption) => {
  const token = localStorage.getItem("jwtToken");

  return dispatch => {
    return axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data,
      url: `${API.BASE}${API.POST_IMAGE}`
    })
      .then(res => {
        return axios({
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`
          },
          data: {
            contentId: res.data.payload.contentId,
            caption
          },
          url: `${API.BASE}${API.POST_CAPTION}`
        }).then(() => dispatch(submitSuccess()))
        .then(() => dispatch(submitError()))
      })
      .catch(() => dispatch(submitError()));
  };
};

export const getPosts = () => {
  const token = localStorage.getItem("jwtToken");

  return dispatch => {
    return axios({
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`
      },
      url: `${API.BASE}${API.GET_POSTS}`
    }).then(res => dispatch(loadPosts({ list: res.data.payload.reverse() })));
  };
};
