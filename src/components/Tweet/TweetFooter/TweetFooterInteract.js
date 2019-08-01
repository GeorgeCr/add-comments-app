import React, { Component } from 'react';

class TweetFooterInteract extends Component {
    handleLikeClick = () => {
        const likeIcon = document.querySelector('.like-icon');
        likeIcon.classList.toggle('liked');
        let liked = this.props.tweetInteractivity.isLiked;
        console.log(liked);
        let likeIndicator = liked ? -1: 1;
        liked = !liked;
        this.props.likeHandler(likeIndicator);
    }

    handleRetweetClick = () => {
        const retweetIcon = document.querySelector('.retweet-icon');
        retweetIcon.classList.toggle('retweeted');
        let retweeted = this.props.tweetInteractivity.isRetweeted;
        let retweetIndicator = retweeted ? -1: 1;
        retweeted = !retweeted;
        this.props.retweetHandler(retweetIndicator);
    }

    handleCommentClick = () => {
        let isFormOpen = this.props.tweetInteractivity.isCommentFormOpen;
        isFormOpen = !isFormOpen;
        this.props.commentHandler(isFormOpen);
    }

    render() {
        return (
            <div className="tweet-footer-interact">
                <img onClick={this.handleCommentClick} 
                className="comment-icon" 
                src={require('../../../assets/img/comment-icon.svg')} 
                alt="comment-icon" />
                <img onClick={this.handleRetweetClick} 
                className="retweet-icon" 
                src={this.props.tweetInteractivity.isRetweeted ? require('../../../assets/img/retweet.svg') : require('../../../assets/img/unretweet.svg')} 
                alt="retweet-icon" />
                <img onClick={this.handleLikeClick} 
                className="like-icon" 
                src={this.props.tweetInteractivity.isLiked ? require('../../../assets/img/like.svg') : require('../../../assets/img/unlike.svg')} 
                alt="tweet-like" />
            </div>
        )
    }
}

export default TweetFooterInteract;