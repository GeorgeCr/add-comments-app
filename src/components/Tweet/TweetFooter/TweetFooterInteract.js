import React from 'react';

function TweetFooterInteract(props) {
    return (
        <div className="tweet-footer-interact">
            <img className="comment-icon" src={require('../../../assets/img/comment-icon.svg')} alt="comment-icon" />
            <img className="retweet-icon" src={require('../../../assets/img/retweet.svg')} alt="retweet-icon" />
            <img className="like-icon" src={require('../../../assets/img/like.svg')} alt="tweet-like" />
        </div>
    )
}

export default TweetFooterInteract;