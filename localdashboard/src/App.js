import React, {Component} from 'react';      
import TimeCard from './components/timeCard.js'
import NewsCard from './components/newsCard.js'
import axios from 'axios';

class App extends Component{
  constructor(props){    
    super(props)
  }
  render(){
      var third_width = Math.round(window.innerWidth/3);
      var half_height = Math.round(window.innerHeight/2);
    return (
      <React.Fragment>
        <div style={{display:"inline-block", verticalAlign:"top", margin:"auto", minHeight:half_height+"px", minWidth:third_width+"px", height:half_height+"px", width:third_width+"px"}}>        
          <NewsCard></NewsCard>
        </div>
        <div style={{display:"inline-block", verticalAlign:"top", margin:"auto", height:half_height+"px", width:third_width+"px"}}>        
          <TimeCard></TimeCard>
        </div>      
      </React.Fragment>
    );
  }
}

export default App;
