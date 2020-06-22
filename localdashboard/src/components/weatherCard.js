import React, {Component} from 'react';      
import axios from 'axios';
import '../css/weatherCard.css';
import clouds from '../media/clouds.mp4';

class WeatherCard extends Component{
  constructor(props){
    super(props);
    this.state={
        current_weather:null,
        hourly_weather:null,
        daily_weather:null
    };
  }
  componentDidMount(){
    setInterval(()=>{
        this.getWeather();
    }, 2 * 60 * 1000)
    this.getWeather();
  }
  async getWeather(){
      console.log("getting weather")
    axios.get("https://api.openweathermap.org/data/2.5/onecall?lat=42.3&lon=-83&%20exclude=minutely&units=imperial&appid=ada7d94deca1e938a3cc4bf5fcc08833")
    .then((response)=>{
        console.log(response);
        this.setState({
            current_weather:response.data.current,
            hourly_weather:response.data.hourly,
            daily_weather:response.data.daily
        })
    })
    .catch((err)=>{
        console.log(err);
    });
  }
  render(){
      console.log(this.state.current_weather);
      console.log(this.state.hourly_weather);
      console.log(this.state.daily_weather);
      let daily_weather = [];
      let current_weather;

      if(this.state.daily_weather!=null){
          let daily_weather_obj = this.state.daily_weather;
          daily_weather_obj.map((row,index)=>{
              daily_weather.push(
                  <div id="day_cards">
                      <img src={"http://openweathermap.org/img/wn/" + row.weather[0].icon + "@2x.png"}></img>
                      <h1>{Math.round(row.temp.max)}</h1>
                      <h1>{Math.round(row.temp.min)}</h1>
                  </div>
              )              
          })
      }
      if(this.state.current_weather!=null){
          let current_weather_obj = this.state.current_weather;
          current_weather = (
                <React.Fragment>
                    <h1 id="current_weather_h1">Current Weather</h1> 
                    <h2>{Math.round(current_weather_obj.temp)}</h2>
                </React.Fragment>
            );
      }
    return (
        <div id="main_weather">
            <video id="weather_video" autoPlay loop muted>
                <source src={clouds} type="video/mp4"/>
            </video>
            {current_weather}
            {daily_weather}          
       </div>
    );
  }
}
export default WeatherCard;