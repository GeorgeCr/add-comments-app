import React, { Component } from 'react';

class TweetFooterInteract extends Component {

    constructor(props) {
        super(props);

        this.state = {
            liked: false,
            retweeted: false,
            commenting: true
        }
    }

    handleLikeClick = () => {
        const likeIcon = document.querySelector('.like-icon');
        likeIcon.classList.toggle('liked');
        this.setState({
            liked: !this.state.liked
        });
        let likeIndicator = this.state.liked ? -1: 1;
        this.props.passLike(likeIndicator);
    }

    handleRetweetClick = () => {
        const retweetIcon = document.querySelector('.retweet-icon');
        retweetIcon.classList.toggle('retweeted');
        this.setState({
            retweeted: !this.state.retweeted
        });
        let retweetIndicator = this.state.retweeted ? -1 : 1;
        console.log(retweetIndicator);
        this.props.passRetweet(retweetIndicator);
    }

    handleCommentClick = () => {
        this.setState({
            commenting: !this.state.commenting
        });
        this.props.passComment(this.state.commenting);
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
                src={this.state.retweeted ? require('../../../assets/img/retweet.svg') : require('../../../assets/img/unretweet.svg')} 
                alt="retweet-icon" />
                <img onClick={this.handleLikeClick} 
                className="like-icon" 
                src={this.state.liked ? require('../../../assets/img/like.svg') : require('../../../assets/img/unlike.svg')} 
                alt="tweet-like" />
            </div>
        )
    }
}

export default TweetFooterInteract;