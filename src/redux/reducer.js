// redux/imagesReducer.js
import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_FAILURE } from "./actionTypes";

const initialState = {
  images: [],
  loaded: false,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: [...state.images, ...action.payload],
        loaded: true,
        error: null,
      };
    case FETCH_IMAGES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;
