import React, { Component } from 'react';
import { Media } from 'reactbulma'
import { Image } from 'reactbulma'
import { Content } from 'reactbulma'
import { Box } from 'reactbulma'
import TimeAgo from 'react-timeago'
// var TimeAgo = require('react-timeago').default
class Tweet extends Component {
	render() {
		let tweet = this.props.tweet;
		return (
			<Box style={{marginRight: "300px", marginLeft: "300px", }} >
				<Media>
					<Media.Left>
						<Image is='64x64' src={tweet.img} alt="Image"/>
					</Media.Left>
					<Media.Content>
						<Content>
							<p>
								<strong>{tweet.name}</strong> <small><TimeAgo date={tweet.date != ""?tweet.date : ""}/> </small>
								<br/>
								{tweet.text}
							</p>
						</Content>
					</Media.Content>
				</Media>

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
