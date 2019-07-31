import React from 'react';

function TweetBody(props) {
    return (
        <div className="tweet-body">{props.tweetBody()}</div>
    );
}

export default TweetBody;