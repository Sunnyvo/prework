import React, { Component } from 'react';
import logo from './logo.svg';

import TweetBox from './TweetBox';
import Tweet from './Tweet';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      tweets: [
      {
        name: "Charlee",
        text: "hello Synny!",
        liked: true,
        date: "Nov 19, 2017",
        img: "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/13924881_10105599279810183_392497317459780337_n.jpg?oh=440ba97d054d9111e93017155dd0bb8b&oe=5A959890"
      },
      {
        name: "Stanley",
        text: "welcome back!",
        liked: false,
        date: "Nov 19, 2017",
        img: "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/21150111_10155596851743965_420675479642399202_n.jpg?oh=847822cf15989bf084c31069d7d420fd&oe=5A96FCBE"
      }

    ]
    };
  }

  handleTweet(tweetText){
    let tweetObj = {
      name: "Sunny",
      text: tweetText,
      like: false,
      date: new Date(),
      img: "https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/15241934_1236741486392139_619487098797628764_n.jpg?oh=337dc3e9bb92a57db4be3620d8ee6b5b&oe=5AA1BB36"
    }
    this.setState({
      tweets: this.state.tweets.concat(tweetObj)
    });
  }
  handleLike(tweet){
    let tweets = this.state.tweets.map((t)=>{
      if(t.text == tweet.text){
        return{
          text: t.text,
          liked: !t.liked,
          date: t.date,
          name: t.name,
          img: t.img
        }
      }
      return t;
    });
    this.setState({
      tweets
    })
  }
  handleDelete(tweet){
    this.setState(
      {
        tweets: this.state.tweets.filter((t)=> t != tweet)

      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The prework of Sunny</h1>
        </header>
        <div>
          <TweetBox prompt="what is your status?" onTweet={this.handleTweet.bind(this)}/>
        </div>
        <div>
          {
            this.state.tweets.map( tweet =>
            <Tweet tweet={tweet}
            handleLike = {this.handleLike.bind(this)}
            handleDelete = {this.handleDelete.bind(this)}
            />
            )}
        </div>
      </div>
    );
  }
}

export default App;
