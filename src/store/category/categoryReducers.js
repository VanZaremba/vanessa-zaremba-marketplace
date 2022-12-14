import { SET_CATEGORY } from "./categoryTypes";

const initialState = {
  categoryName: "all",
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryName: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
