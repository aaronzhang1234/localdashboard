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
    await axios.get("https://cors-anywhere.herokuapp.com/https://feeds.npr.org/1004/feed.json")
    .then((response)=>{
        console.log(response);
        this.setState({
            news_object:response.data.items
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
      console.log(cur_news);
    return (
        <React.Fragment>
          {news.length &&
          <React.Fragment>
              <div id="news_card" style={{backgroundImage:"url("+cur_news.image+")"}}>
                <h1 id="title">{cur_news.title}</h1>
              </div>
          </React.Fragment>
          }
        </React.Fragment>
    );
  }
}
export default NewsCard;