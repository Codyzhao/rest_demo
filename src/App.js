import React, { Component } from "react";
import "./App.css";
import Card from "./component/Card";
import { Provider } from "react-redux";
import store from "./store";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/postAction";

class App extends Component {
  // state = {
  //   data: []
  // };

  componentDidMount() {
    this.props.fetchPosts();
  }

  handleDelete = user => {
    // let clonedUsers = [...this.state.data];
    // clonedUsers = clonedUsers.filter(item => item !== user);
    // this.setState({
    //   data: clonedUsers
    // });
  };

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>test</h1>
          {this.props.posts.map(user => (
            <Card key={user.id} user={user} onDelete={this.handleDelete} />
          ))}
        </div>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
