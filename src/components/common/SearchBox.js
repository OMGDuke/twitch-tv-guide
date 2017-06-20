import React, { Component } from 'react';

class SearchBox extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.findUser(this.username.value);
    this.usernameForm.reset();
  }

  render() {
    return (
      <form ref={(input) => this.usernameForm = input} onSubmit={(e) => {this.handleSubmit(e)}}>
        Enter Username: <input ref={(input) => this.username = input} type="text"></input>
      <button>Search</button>
      </form>
    );
  }
}



export default SearchBox;
