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
        text: "hello Synny!",
        liked: true,
        date: "Nov 19, 2017"
      },
      {
        text: "welcome back!",
        liked: false,
        date: "Nov 19, 2017"
      }

    ]
    };
  }

  handleTweet(tweetText){
    let tweetObj = {
      text: tweetText,
      like: false
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
          liked: !t.liked
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
