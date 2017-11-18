import React, { Component } from 'react';
import { Box } from 'reactbulma'

class Tweet extends Component {
	render() {
		let tweet = this.props.tweet;
		return (
			<Box style={{marginRight: "300px", marginLeft: "300px", }} >

					{tweet.text}

				<br/>
				<a href='#' onClick={()=> this.props.handleLike(tweet)}>
				{tweet.liked ? 'Like' : 'Unlike'} Post
				</a>
				<a href='#'
					style={{marginLeft:"20px"}}
					onClick={()=> this.props.handleDelete(tweet)}
				>
					Delete
				</a>
			</Box>
		)
	}
}
export default Tweet;
