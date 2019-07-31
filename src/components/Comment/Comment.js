import React, { Component } from 'react';
import CommentBody from './CommentBody';
import CommentFooter from './CommentFooter';
import './style/style.scss';


class Comment extends Component {
    render() {
        return (
            <div className="comment">
                <CommentBody />
                <CommentFooter />
            </div>
        )
    }
}

export default Comment;