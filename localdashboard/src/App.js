import React, {Component} from 'react';      
import NasaCard from './components/nasaCard.js'
import axios from 'axios';

class App extends Component{
  constructor(props){    
    super(props)
  }
  render(){
    return (
      <NasaCard></NasaCard>
    );
  }
}

export default App;
