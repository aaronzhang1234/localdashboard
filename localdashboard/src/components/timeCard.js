import React, {Component} from 'react';      
import axios from 'axios';
import '../css/timeCard.css'

class TimeCard extends Component{
  constructor(props){
    super(props);
    this.state={
      time:null 
    };
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState({
        time:new Date().toLocaleTimeString()
      }) 
    }, 1000)
  }
  render(){
      var third_width = Math.round(window.innerWidth/3);
      var half_height = Math.round(window.innerHeight/2);
    return (
    <div style={{margin:"auto", backgroundImage:"url(https://picsum.photos/"+third_width+"/"+half_height+")",height:half_height+"px", width:third_width+"px"}}>
      <h1 id="time">{this.state.time}</h1> 
    </div>

    );
  }
}

export default TimeCard;