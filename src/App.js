import React, { Component } from "react";
import "./App.css";
import Card from "./component/Card";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url) // Call the fetch function passing the url of the API as a parameter
      .then(response => response.json())
      .then(json => {
        this.setState({
          data: json
        });
      })
      .catch(function() {
        // This is where you run code if the server returns any errors
      });
  }

  handleDelete = user => {
    let clonedUsers = [...this.state.data];
    clonedUsers = clonedUsers.filter(item => item !== user);

    this.setState({
      data: clonedUsers
    });
  };

  render() {
    return (
      <div className="App">
        <h1>test</h1>
        {this.state.data.map(user => (
          <Card key={user.id} user={user} onDelete={this.handleDelete} />
        ))}
      </div>
    );
  }
}

export default App;
