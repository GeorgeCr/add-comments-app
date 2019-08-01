import React, { Component } from 'react';
import UserInfo from '../shared/UserInfo';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter/TweetFooter';

class Tweet extends Component {
    getUserInfoData = () => {
        const  { user } = this.props.data;
        return user;
    }

    getTweetBodyData = () => {
        const { tweetContent } = this.props.data.tweet;
        return tweetContent;
    }

    getTweetFooterData = () => {
        const { tweetContent, ...tweetFooterData } = this.props.data.tweet;
        return tweetFooterData;
    }

    registerRetweet = (retweet) => {
        const currentData = this.props.data;
        let numRetweets = parseInt(currentData.tweet.tweetRetweets);
        numRetweets += retweet;
        currentData.tweet.tweetRetweets = numRetweets.toString();
        this.props.onRetweet(currentData);
    }

    registerLike = (like) => {
        const currentData = this.props.data;
        let numLikes = parseInt(currentData.tweet.tweetLikes);
        numLikes += like;
        currentData.tweet.tweetLikes = numLikes.toString();
        this.props.onLike(currentData);
    }

    registerComment = (commentState) => {
        this.props.onComment(commentState);
    }

    render() {
        return (
            <div>
                <UserInfo userInfo={this.getUserInfoData} />
                <TweetBody tweetBody={this.getTweetBodyData} />
                <TweetFooter 
                tweetFooter={this.getTweetFooterData} 
                getRetweet={this.registerRetweet} 
                getLike={this.registerLike} 
                getComment={this.registerComment} />
            </div>
        )
    }
}

export default Tweet;