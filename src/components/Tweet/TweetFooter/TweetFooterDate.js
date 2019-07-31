import React from 'react';

function TweetFooterDate(props) {
    return (
        <div className="tweet-footer-date">
            <div>{props.tweetTimeDevice.tweetTime}<span className="separator">·</span></div>
            <div>{props.tweetTimeDevice.tweetDate}<span className="separator">·</span></div>
            <div className="tweet-device">Twitter for {props.tweetTimeDevice.tweetDevice}</div>
        </div>
    );
}

export default TweetFooterDate;