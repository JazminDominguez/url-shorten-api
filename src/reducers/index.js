import { ADD_LINK } from "../constants/action-types";
const initialState = [];

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LINK:
      //let payload = action.payload
      return [...state, action.payload];
    default:
      return state;
  }
}

export default rootReducer;
