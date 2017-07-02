import React, { Component } from 'react';
import axios from 'axios';

class DisplayStreamer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      streamer: {}
    }
    this.getStreamerDetails();
  }

  componentWillReceiveProps(newProps) {
    this.props = newProps;
    this.getStreamerDetails();
  }

  getStreamerDetails() {
    console.log(process.env)
    const axiosHeaders = {
      'Client-ID': process.env.REACT_APP_TWITCH_API,
      'Accept': 'application/vnd.twitchtv.v5+json'
    };
    let apiUrl = `https://api.twitch.tv/kraken/users?login=${this.props.username}`
    axios.get(apiUrl, {
      headers: axiosHeaders
    })
      .then((response) => {
        console.log(response.data.users[0]);
        this.setState({streamer: response.data.users[0]});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.streamer.display_name}</h1>
        <h2>Bio: {this.state.streamer.bio}</h2>
        <img src={this.state.streamer.logo} alt={`${this.state.streamer.display_name} logo`}/>
        <iframe
          title="twitch stream"
          src={`http://player.twitch.tv/?channel=${this.state.streamer.name}&muted=true`}
          height="720"
          width="1280"
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </div>
    );
  }
}



export default DisplayStreamer;
