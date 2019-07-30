import React from 'react';
import TweetFooterDate from './TweetFooterDate';
import TweetFooterLikes from './TweetFooterLikes';
import TweetFooterInteract from './TweetFooterInteract';

function TweetFooter(props) {
    return (
        <div>
            <TweetFooterDate />
            <TweetFooterLikes />
            <TweetFooterInteract />
        </div>
    )
}

export default TweetFooter;