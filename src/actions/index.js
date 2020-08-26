import { ADD_LINK } from "../constants/action-types.js";

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
      .then((json) => dispatch({ type: ADD_LINK, payload: json }));
  };
};
