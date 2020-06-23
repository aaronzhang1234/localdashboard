import React, {Component} from 'react';      
import axios from 'axios';
import '../css/weatherCard.css';
import WeatherBackground from './weatherComponents/weatherBackground.js';

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
      let weather_background;

      if(this.state.daily_weather!=null){
          let daily_weather_obj = this.state.daily_weather;
          daily_weather_obj.forEach(day => {

              let weekday = new Array(7);
              weekday[0] = "Sun";  
              weekday[1] = "Mon";
              weekday[2] = "Tue";
              weekday[3] = "Wed";
              weekday[4] = "Thu";
              weekday[5] = "Fri";
              weekday[6] = "Sat";
              let datetime = new Date(day.dt * 1000);
              let dayname = weekday[datetime.getDay()];
              daily_weather.push(
                  <div id="day_cards">
                      <img src={"http://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"}></img>
                      <h1 id="day_name">{dayname}</h1>
                      <h1 class="temps">{Math.round(day.temp.max)}&deg;</h1>
                      <h1 id="min_temp" class="temps">{Math.round(day.temp.min)}&deg;</h1>
                  </div>
              )
          });              
      }
      if(this.state.current_weather!=null){
          let current_weather_obj = this.state.current_weather;
          current_weather = (
                <React.Fragment>
                    <h1 id="current_temp">{Math.round(current_weather_obj.temp)}&deg;</h1>
                </React.Fragment>
            );
      }
    return (
        <div id="main_weather">
            <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300;1,900&display=swap" rel="stylesheet"/>
            <WeatherBackground weather={this.state.current_weather}/>            
            {current_weather}
            {daily_weather}          
       </div>
    );
  }
}
export default WeatherCard;