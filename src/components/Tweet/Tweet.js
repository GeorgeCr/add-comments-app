import React, { Component } from 'react';
import UserInfo from '../shared/UserInfo';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter/TweetFooter';
import CommentForm from '../Comment/CommentForm/CommentForm';
import './style/style.scss';

class Tweet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            user: {
                userName: 'John Doe',
                image: 'https://www.w3schools.com/howto/img_avatar.png',
                verified: true,
                userLink: '@johnDoe'
            },
            tweet: {
                tweetContent: 'LS aka Luke Skywalker is an anti-hero from Redditorion-V, known for his eccentric remarks and calls for buffs in the face of Rito balance approach. He is known for malding and telling people to play Annie, as "Her fire will light the way to GoldenCity-IV".',
                tweetTime: '9:06 PM',
                tweetDate: 'Jul 30, 2019',
                tweetDevice: 'Android',
                tweetRetweets: '54',
                tweetLikes: '19',
                isCommentFormOpen: false,
                isLiked: false,
                isRetweeted: false,
                comments: []
            }
        }
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
        const currentData = this.state;
        let numRetweets = parseInt(currentData.tweet.tweetRetweets);
        numRetweets += retweet;
        currentData.tweet.tweetRetweets = numRetweets.toString();
        currentData.tweet.isRetweeted = !currentData.tweet.isRetweeted;
        this.setState(currentData);
    }

    registerLike = (like) => {
        const currentData = this.state;
        let numLikes = parseInt(currentData.tweet.tweetLikes);
        numLikes += like;
        currentData.tweet.tweetLikes = numLikes.toString();
        currentData.tweet.isLiked = !currentData.tweet.isLiked;
        this.setState(currentData);
    }

    registerCommentForm = (comment) => {
        const currentData = this.state;
        currentData.tweet.isCommentFormOpen = comment;
        this.setState(currentData);
    }

    render() {
        return (
            <div>
                <UserInfo userInfo={this.getUserInfoData} />
                <TweetBody tweetBody={this.getTweetBodyData} />
                <TweetFooter 
                tweetFooter={this.getTweetFooterData} handleLike={this.registerLike} handleRetweet={this.registerRetweet} handleComment={this.registerCommentForm} />
                {/* <CommentForm /> */}
                {this.state.tweet.isCommentFormOpen ? <CommentForm /> : null}
            </div>
        )
    }
}

export default Tweet;