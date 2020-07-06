import React, {Component} from 'react';      
import axios from 'axios';

class UntitledCard extends Component{
  constructor(props){
    super(props);
  }
  componentDidMount(){
    window.onSpotifyWebPlaybackSDKReady=()=>{
      const token = 'BQAqIn8p9y0rq6wBCmec3KnTe5o3HvEs9kTaDnVm5kr1nla6ZT2i9rLDN6DVvcxe0XpKHQkLRz7BVkIACTVRiO8N3ghuqtZnPpc7GNYShzC2Xi43vaRMdiNRINvqgO-gvZc7ryPaScZ8SZJWMWRdkQe6sWOnj0nnrmX3Fuh1';
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