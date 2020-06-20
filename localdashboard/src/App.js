import React, {Component} from 'react';      
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      nasa_image:null
    }
  }
  componentDidMount(){
    this.getNasaImage();
  }
  async getNasaImage(){
    let nasa_response = axios.get("https://api.nasa.gov/planetary/apod?api_key=WSbzw7acACoeokCkenEnI8GgynOR5I4AkDPeix0n")
    .then((response)=>{
      this.setState({
        nasa_image:response.data.url
      })
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  render(){
    return (
      <React.Fragment>
        <img src={this.state.nasa_image}/>
      </React.Fragment>
    );
  }
}

export default App;
