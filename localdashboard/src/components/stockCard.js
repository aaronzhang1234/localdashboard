import React, {Component} from 'react';      
import axios from 'axios';

class StockCard extends Component{
  constructor(props){
    super(props);
    this.state={
      SPY_DATA:null,
      NVDA_DATA:null,
      F_DATA:null,
      TSM_DATA:null
    }
  }
  componentDidMount(){
    setInterval(()=>{
      this.getStocks();
    },60*1000)
    this.getStocks();
  }
  async getStocks(){
    let av_key = "L2JPMX2ZDKA2DFUY";
    axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=SPY&apikey="+av_key)
    .then((response)=>{
      this.setState({
        SPY_DATA:response["data"]["Global Quote"]
      })
      console.log(response["data"]["Global Quote"]);
    })
    axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=NVDA&apikey="+av_key)
    .then((response)=>{
      this.setState({
        NVDA_DATA:response["data"]["Global Quote"]
      })
      console.log(response["data"]["Global Quote"]);
    })
    axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=F&apikey="+av_key)
    .then((response)=>{
      this.setState({
        F_DATA:response["data"]["Global Quote"]
      })
      console.log(response["data"]["Global Quote"]);
    })
    axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=TSM&apikey="+av_key)
    .then((response)=>{
      this.setState({
        TSM_DATA:response["data"]["Global Quote"]
      })
      console.log(response["data"]["Global Quote"]);
    })

  }

  render(){
    return (
        <React.Fragment>
            <h1>stonks</h1>
        </React.Fragment>
    );
  }
}

export default StockCard;