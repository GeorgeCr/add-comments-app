import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const TWEET_DATA = 
    {
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
            tweetLikes: '18',
        }
    };

ReactDOM.render(<App data={TWEET_DATA} />, document.getElementById('root'));