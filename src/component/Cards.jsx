import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "./../actions/postAction";
import Card from "./Card";

class Cards extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderCards = () => {
    const { posts: users } = this.props;
    return users.map(user => <Card key={user.id} user={user} />);
  };

  handleDelete = user => {
    // let clonedUsers = [...this.state.data];
    // clonedUsers = clonedUsers.filter(item => item !== user);
    // this.setState({
    //   data: clonedUsers
    // });
  };

  render() {
    return <div className="cards">{this.renderCards()}</div>;
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Cards);
