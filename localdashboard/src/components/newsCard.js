import React, {Component} from 'react';      
import axios from 'axios';
import '../css/newsCard.css'

class NewsCard extends Component{
  constructor(props){
    super(props);
    this.state={
        news_object:null,
        number:0
    }
  }
  componentDidMount(){
    setInterval(()=>{
        var curnum = this.state.number +1
      this.setState({
          number:curnum
      }) 
    }, 10 * 1000)
    setInterval(()=>{
        this.getNews()
    }, 20 * 60 * 1000)
   this.getNews();
  }
  async getNews(){
      console.log("getting news");
      
    await axios.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=us&apiKey=3a2c64507e55439dbaa1d17477ed84d7")
    .then((response)=>{
        console.log(response);
        this.setState({
            curnum:0,
            news_object:response.data.articles
        })
    })
    .catch((err)=>{
        console.log(err);
    })   
  }
  render(){
      var news = []
      var cur_news;
      if(this.state.news_object != null){
        news=this.state.news_object;
        cur_news = news[this.state.number%news.length]
      }    
      return (
        <React.Fragment>
          {news.length &&
          <React.Fragment>
              <div id="news_card" style={{backgroundImage:"url("+cur_news.urlToImage+")"}}>
                <h1 id="title">{cur_news.title}</h1>
              </div>
          </React.Fragment>
          }
        </React.Fragment>
    );
  }
}
export default NewsCard;