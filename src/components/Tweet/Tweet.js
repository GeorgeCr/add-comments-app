import React, { Component } from 'react';
import UserInfo from '../shared/UserInfo';
import TweetBody from './TweetBody';
import TweetFooter from './TweetFooter/TweetFooter';

class Tweet extends Component {
    render() {
        return (
            <div>
                <UserInfo />
                <TweetBody />
                <TweetFooter />
            </div>
        )
    }
}

export default Tweet;