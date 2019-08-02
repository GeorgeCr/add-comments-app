import React, { Component } from 'react';
import CommentFormBody from './CommentFormBody';

class CommentForm extends Component {

    handleFormClose = (closed) => {
        this.props.handleFormClose(closed);
    }

    handleCommData = (commData) => {
        this.props.handleCommData(commData);
    }

    render() {
        return (
            <div className="comment">
                <CommentFormBody tweetFooterData={this.props.tweetFooterData} handleFormClose={this.handleFormClose} handleCommData={this.handleCommData} />
            </div>
        )
    }
}

export default CommentForm;