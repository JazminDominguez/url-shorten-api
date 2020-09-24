import { ADD_LINK, SHOW_LOADER, HIDE_LOADER } from "../constants/action-types";
const initialState = {
  arrayOfLinks: [],
  loading: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: action.payload,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case ADD_LINK:
      return {
        ...state,
        arrayOfLinks: [...state.arrayOfLinks, action.payload],
      };
    default:
      return state;
  }
}

export default rootReducer;
