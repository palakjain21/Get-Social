// redux/imagesActions.js
import axios from "axios";
import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "./actionTypes";

const apiRoot = "https://api.unsplash.com";
const accessKey = "Vdo7TpSQRd67RLo5ZKLwA6ZegaWJFkJRcbRnz52cNCM";

export const fetchImagesSuccess = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: images,
});

export const fetchImagesFailure = (error) => ({
  type: FETCH_IMAGES_FAILURE,
  payload: error,
});

export const fetchImages =
  (count = 10) =>
  (dispatch) => {
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        dispatch(fetchImagesSuccess(res.data));
      })
      .catch((error) => {
        dispatch(fetchImagesFailure(error.message));
      });
  };
