import React, {Component} from 'react';      
import TimeCard from './components/timeCard.js'
import axios from 'axios';

class App extends Component{
  constructor(props){    
    super(props)
  }
  render(){
    return (
      <TimeCard></TimeCard>
    );
  }
}

export default App;
