import React, {Component} from 'react';      
import axios from 'axios';

class UntitledCard extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.onSpotifyWebPlaybackSDKReady=()=>{
      const token = 'BQAsTHOThrq7GIqSHhVYbKb0EHb70r5s23S83eMpE7Gc6oaHFo31HDTVw2Q7W6Ry5uPOM1MxXCZ5OuvW2SlbUe2svWDEPNt4KBbE1kbNpP7x2aY3T9Ld8Y7Nooy7BcPvNGYk1ePGYa2kVMg-HfuBNflnXvU8BNDMYVG5mmbc';

      const player = new window.Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
      });

    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();
  } 
  }

  render(){
    return (
        <React.Fragment>
            <h1>Just waiting on the good ole noggin</h1>
        </React.Fragment>
    );
  }
}

export default UntitledCard;