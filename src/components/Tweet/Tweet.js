import React, { Component } from 'react';
import UserInfo from '../shared/UserInfo';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter/TweetFooter';
import CommentForm from '../Comment/CommentForm/CommentForm';
import ResultedComment from '../Comment/ResultedComment/ResultedComment';

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
                usersCommenting: [
                    {
                        userName: 'Jenny Smith',
                        image: 'https://www.w3schools.com/howto/img_avatar2.png',
                        verified: false,
                        userLink: '@jennySmith'
                    },
                    {
                            userName: 'Sally Thompson',
                            image: 'https://www.w3schools.com/howto/img_avatar2.png',
                            verified: true,
                            userLink: '@sallyT'
                    }
                ],
                comments: [
                        {
                            commentContent: `LMAO, are you kiddin' me?`,
                            commentTime: '10:18 PM',
                            commentDate: 'Jul 31, 2019'
                        },
                        {
                            commentContent: 'LOL, REALLY?????? How....',
                            commentTime: '6:05 AM',
                            commentDate: 'Aug 1, 2019'
                        }
                ]
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

    getCommentingUserInfoData = (index) => {
        const user = this.state.tweet.usersCommenting[index];
        return user;
    }

    getCommentData = (index) => {
        const { commentContent } = this.state.tweet.comments[index];
        console.log(commentContent);
        return commentContent;
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

    registerCommData = (commData) => {
        const currentData = this.state;
        currentData.tweet.usersCommenting.push(commData.userCommenting);
        currentData.tweet.comments.push({
            commentContent: commData.commentContent
        });
        this.setState(currentData);
        console.log(this.state);
    }

    getComm(index) {
        const commentingUserInfoData = this.getCommentingUserInfoData(index);
        const commentData = this.getCommentData(index);
        return <ResultedComment 
            key={index} 
            userInfo={commentingUserInfoData} 
            tweetUserLink={this.getUserInfoData} 
            commentContent={commentData} 
            />
    }

    render() {
        return (
            <div>
                <UserInfo userInfo={this.state.user} />
                <TweetBody tweetBody={this.getTweetBodyData} />
                <TweetFooter 
                tweetFooter={this.getTweetFooterData} handleLike={this.registerLike} handleRetweet={this.registerRetweet} handleComment={this.registerCommentForm} />
                {this.state.tweet.isCommentFormOpen ? <CommentForm tweetFooterData={this.getTweetFooterData} handleFormClose={this.registerCommentForm} handleCommData={this.registerCommData} /> : null}
                {this.state.tweet.comments.map((comm, index) => {
                    return this.getComm(index);
                })}
            </div>
        )
    }
}

export default Tweet;