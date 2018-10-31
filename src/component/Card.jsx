import React from "react";

const Card = props => {
  const { user } = props;
  return (
    <div className="card" key={user.id}>
      <h3 className="card-title">{user.name}</h3>
      <p>
        <a href={"mailto:" + user.email}>{user.email}</a>
      </p>
      {/* <button onClick={() => onDelete(user)}>Delete</button> */}
    </div>
  );
};

export default Card;
