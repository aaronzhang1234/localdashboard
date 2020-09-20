import React, {Component} from 'react';      

class WeatherBackground extends Component{
  constructor(props){
    super(props);
  }
  render(){      
      let weather_background_object;
      let weather_background_video;
      if(this.props.weather!=null){
        let current_weather = this.props.weather.weather[0].main;
        switch(current_weather){
            case "Rain":
                weather_background_video = require("../../media/rain_"+Math.ceil(Math.random()*5)+".mp4");
                break;
            case "Clear":
                weather_background_video = require("../../media/clear_"+Math.ceil(Math.random()*3)+".mp4"); 
                break;
            case "Clouds":
                weather_background_video = require("../../media/clouds_"+Math.ceil(Math.random()*4)+".mp4"); 
                break;
            case "Fog":
                weather_background_video = require("../../media/fog_"+Math.ceil(Math.random()*1)+".mp4"); 
                break;
            case "Mist":
                weather_background_video = require("../../media/mist_"+Math.ceil(Math.random()*1)+".mp4"); 
                break;
            case "Haze":
                break;
            case "Dust":
                break;
            case "Ash":
            case "Tornado":
            case "Smoke":
                weather_background_video = require("../../media/fuck_"+Math.ceil(Math.random()*1)+".mp4"); 
                console.log("well fuck");
                break;
        }
        weather_background_object = (
          <video id="weather_video" autoPlay loop muted>
              <source src={weather_background_video} type="video/mp4"/>
          </video>
        )
      }
    return (
        <React.Fragment>
          {weather_background_object}
        </React.Fragment>
    );
  }
}
export default WeatherBackground;