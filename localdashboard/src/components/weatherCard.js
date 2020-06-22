import React, {Component} from 'react';      
import axios from 'axios';
import '../css/weatherCard.css'

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
    }, 60 * 1000)
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
      var daily_weather = [];
      let current_weather;
      if(this.state.daily_weather!=null){
          daily_weather = this.state.daily_weather
      }
      if(this.state.current_weather!=null){
          current_weather = (
                <React.Fragment>
                    <h1>Current Weather</h1> 
                    <h2>{Math.round(this.state.current_weather.temp)}</h2>
                </React.Fragment>
            );
      }
    return (
        <div id="main_weather">
            {current_weather}
            {daily_weather.length &&
                daily_weather.map((row,index)=>{
                    return (
                        <div id="day_cards">
                            <img src={"http://openweathermap.org/img/wn/" + row.weather[0].icon + "@2x.png"}></img>
                            <h1>{Math.round(row.temp.max)}</h1>
                            <h1>{Math.round(row.temp.min)}</h1>
                        </div>
                    )
                })
            }            
        </div>
    );
  }
}
export default WeatherCard;