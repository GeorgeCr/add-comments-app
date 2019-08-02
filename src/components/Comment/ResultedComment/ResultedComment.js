import React, { Component } from 'react';
import UserInfo from '../../shared/UserInfo';
import ResultedCommentBody from './ResultedCommentBody';

class ResultedComment extends Component {
    render() {
        return (
            <div className="resulted-comment">
                <div className="comment-header">
                    <UserInfo userInfo={this.props.userInfo} />
                    <div className="reply-header">Replying to <span className="user-link">{this.props.tweetUserLink().userLink}</span></div>
                </div>
                <ResultedCommentBody commentContent={this.props.commentContent} />
            </div>
        )
    }
}

export default ResultedComment;