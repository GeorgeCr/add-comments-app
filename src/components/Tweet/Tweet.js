import React, { Component } from 'react';
import UserInfo from '../shared/UserInfo';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter/TweetFooter';

class Tweet extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.data;
    }

    getUserInfoData = () => {
        const  { user } = this.state;
        return user;
    }

    getTweetBodyData = () => {
        const { tweetContent } = this.state.tweet;
        return tweetContent;
    }

    getTweetFooterData = () => {
        const { tweetContent, ...tweetFooterData } = this.state.tweet;
        return tweetFooterData;
    }

    registerRetweet = (retweet) => {
        const currentState = this.state;
        let numRetweets = parseInt(currentState.tweet.tweetRetweets);
        numRetweets += retweet;
        currentState.tweet.tweetRetweets = numRetweets.toString();
        this.setState({currentState});
    }

    registerLike = (like) => {
        const currentState = this.state;
        let numLikes = parseInt(currentState.tweet.tweetLikes);
        numLikes += like;
        currentState.tweet.tweetLikes = numLikes.toString();
        this.setState({currentState});
    }


    render() {
        return (
            <div>
                <UserInfo userInfo={this.getUserInfoData} />
                <TweetBody tweetBody={this.getTweetBodyData} />
                <TweetFooter tweetFooter={this.getTweetFooterData} getRetweet={this.registerRetweet} getLike={this.registerLike} />
            </div>
        )
    }
}

export default Tweet;