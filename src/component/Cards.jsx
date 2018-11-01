import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../actions/postAction";
import Card from "./Card";

class Cards extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.post) {
      const index = this.getIndex(nextProps.post.id, this.props.posts, "id");
      this.props.posts.splice(index, 1);
    }
  }

  getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1; //to handle the case where the value doesn't exist
  }

  renderCards = () => {
    const { posts: users } = this.props;
    return users.map(user => <Card key={user.id} user={user} />);
  };

  render() {
    return <div className="cards">{this.renderCards()}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  post: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Cards);
