import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "./../actions/postAction";

class Card extends Component {
  handleClick = () => {
    const { user } = this.props;
    // console.log("clicked");
    this.props.deletePost(user);
  };

  render() {
    const { user } = this.props;
    return (
      <div className="card" key={user.id}>
        <h3 className="card-title">{user.name}</h3>
        <p>
          <a href={"mailto:" + user.email}>{user.email}</a>
        </p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}

export default connect(
  null,
  { deletePost }
)(Card);
