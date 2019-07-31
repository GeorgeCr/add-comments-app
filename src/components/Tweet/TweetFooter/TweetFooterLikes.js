import React, { Component } from 'react';

class TweetFooterLikes extends Component {

    formatNumbers(number) {
        let resultNumber = parseInt(number);
        let result = '';
        let thousands = '';
        while (Math.floor(resultNumber / 1000) >= 1) {
            thousands += 'K';
            resultNumber = (resultNumber / 1000).toFixed(1);
            result += `${resultNumber}`;
        }
        result = `${resultNumber} ${thousands}`;
        return result;
    }
    render() {
        return (
            <div className="tweet-footer-likes">
                <div className="tweet-hits"><span>{this.formatNumbers(this.props.tweetLikesRetweets.tweetRetweets)}</span> Retweets</div>
                <div className="tweet-hits"><span>{this.formatNumbers(this.props.tweetLikesRetweets.tweetLikes)}</span> Likes</div>
            </div>
        )
    }
}

export default TweetFooterLikes;