import React, { Component } from 'react';
import CommentBody from './CommentBody';
import CommentFooter from './CommentFooter';


class Comment extends Component {
    render() {
        return (
            <div>
                <CommentBody />
                <CommentFooter />
            </div>
        )
    }
}

export default Comment;