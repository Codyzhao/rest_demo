import { FETCH_POSTS, DELETE_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.tyicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};
