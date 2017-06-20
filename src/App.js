import React, { Component } from 'react';

import './App.css'

import DisplayStreamer from './components/common/DisplayStreamer'
import SearchBox from './components/common/SearchBox'

class App extends Component {
  constructor(){
    super();
    this.state = {
      username: ''
    }
    this.findUser = this.findUser.bind(this);
  }

  findUser(username) {
    const user = {
      username: username
    }
    this.setState(user)
  }

  provideDefaultUser() {
    return this.state.username ? this.state.username : 'lirik';
  }

  render() {
    return (
      <div className="App">
        <SearchBox findUser={this.findUser}/>
      <DisplayStreamer username={this.state.username || 'lirik'}/>
      </div>
    );
  }
}

export default App;
