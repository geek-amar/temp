import { CATEGORY_SUCCESSFULL } from "store/actions";

const Initial_state = {
  category: [],
  isLoading: true,
  error: "",
};

const CategoryReducer = (state = Initial_state, action) => {
  switch (action.type) {
    case CATEGORY_SUCCESSFULL:
      return {
        category: action.payload,
        isLoading: false,
      };
    case "CATEGORY_LOAD_START":
      return {
        ...state,
        isLoading: true,
      };
    case "CATEGORY_LOAD_FAILED":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return { category: state.category };
  }
};

export default CategoryReducer;
