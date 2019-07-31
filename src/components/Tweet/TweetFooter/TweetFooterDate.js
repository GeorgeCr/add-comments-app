import React from 'react';

function TweetFooterDate(props) {
    return (
        <div className="tweet-footer-date">
            <div>9:06 PM<span className="separator">·</span></div>
            <div>Jul 30, 2019<span className="separator">·</span></div>
            <div className="tweet-device">Twitter for Android</div>
        </div>
    );
}

export default TweetFooterDate;