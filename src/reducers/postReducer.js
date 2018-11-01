import { FETCH_POSTS, DELETE_POST } from "../actions/types";

const initalState = {
  items: [],
  item: {}
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case DELETE_POST:
      console.log("delete post reducer");
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}
