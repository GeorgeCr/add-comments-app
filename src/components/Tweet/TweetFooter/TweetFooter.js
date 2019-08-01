import React, { Component } from 'react';
import TweetFooterDate from './TweetFooterDate';
import TweetFooterLikes from './TweetFooterLikes';
import TweetFooterInteract from './TweetFooterInteract';

class TweetFooter extends Component {

    handleLike = (likeValue) => {
        return this.props.handleLike(likeValue);
    }

    handleRetweet = (retweetValue) => {
        return this.props.handleRetweet(retweetValue);
    }

    handleComment = (commentValue) => {
        return this.props.handleComment(commentValue);
    }

    render() {
        const { tweetTime, tweetDate, tweetDevice, tweetRetweets, tweetLikes } = this.props.tweetFooter();
        const tweetsAndRetweets = { tweetRetweets, tweetLikes };
        const tweetDateTime = { tweetTime, tweetDate, tweetDevice };
        const { isLiked, isRetweeted, isCommentFormOpen } = this.props.tweetFooter();
        const tweetInteractivity = { isLiked, isRetweeted, isCommentFormOpen };
        return (
            <div>
                <TweetFooterDate tweetTimeDevice={tweetDateTime} />
                <TweetFooterLikes tweetLikesRetweets={tweetsAndRetweets} />
                <TweetFooterInteract 
                tweetInteractivity={tweetInteractivity} 
                likeHandler={this.handleLike} 
                retweetHandler={this.handleRetweet} 
                commentHandler={this.handleComment}
                />
        </div> 
        )
    }
}

export default TweetFooter;