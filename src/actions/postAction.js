import { FETCH_POSTS, DELETE_POST } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/users") // Call the fetch function passing the url of the API as a parameter
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_POSTS,
        payload: json
      });
    })
    .catch(function() {
      // This is where you run code if the server returns any errors
    });
};

export const deletePost = user => dispatch => {
  console.log("delete post action");
  dispatch({
    type: DELETE_POST,
    payload: user
  });
};
