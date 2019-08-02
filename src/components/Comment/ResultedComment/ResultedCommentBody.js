import React, { Component } from 'react';

class ResultedCommentBody extends Component {
    render() {
        return (
            <div className="resulted-comment-body">
                {this.props.commentContent}
            </div>
        )
    }
}

export default ResultedCommentBody;