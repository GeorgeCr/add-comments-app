import React, { Component } from 'react';
import TweetFooterDate from './TweetFooterDate';
import TweetFooterLikes from './TweetFooterLikes';
import TweetFooterInteract from './TweetFooterInteract';

class TweetFooter extends Component {

    sendRetweet = (tweet) => {
        this.props.getRetweet(tweet);
    }

    sendLike = (like) => {
        this.props.getLike(like);
    }

    attemptComment = () => {
        this.props.getComment();
    }

    render() {
        const { tweetContent, tweetTime, tweetDate, tweetDevice, ...tweetLikes} = this.props.tweetFooter();
        const tweetDateTime = { tweetTime, tweetDate, tweetDevice };
        return (
            <div>
                <TweetFooterDate tweetTimeDevice={tweetDateTime} />
                <TweetFooterLikes tweetLikesRetweets={tweetLikes} />
                <TweetFooterInteract passRetweet={this.sendRetweet} passLike={this.sendLike} passComment={this.attemptComment} />
        </div> 
        )
    }
}

export default TweetFooter;