import {
  ADD_LINK,
  SHOW_LOADER,
  HIDE_LOADER,
} from "../constants/action-types.js";

export const getLink = (originalLink) => {
  return (dispatch) => {
    fetch("https://rel.ink/api/links/", {
      method: "POST",
      body: JSON.stringify({
        url: `${originalLink}`,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        dispatch(hideLoader());
        dispatch({ type: ADD_LINK, payload: json });
      });
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
    payload: true,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
    payload: false,
  };
};
