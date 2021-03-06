import React, {Component} from 'react';      
import TimeCard from './components/timeCard.js';
import NewsCard from './components/newsCard.js';
import WeatherCard from './components/weatherCard.js';
import StockCard from './components/stockCard.js';

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
        <div style={{display:"inline-block", verticalAlign:"top", margin:"auto", height:half_height+"px", width:third_width+"px"}}>        
          <StockCard></StockCard>
        </div>      
        <div style={{margin:"auto", width:"100%", height:half_height+"px"}}>        
          <WeatherCard></WeatherCard>        
        </div>      
      </React.Fragment>
    );
  }
}

export default App;
