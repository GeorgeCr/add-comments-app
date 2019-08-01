import React, { Component } from 'react';
import CommentFormBody from './CommentFormBody';
import '../style/style.scss';

class CommentForm extends Component {

    handleFormClose = (closed) => {
        this.props.handleFormClose(closed);
    }

    render() {
        return (
            <div className="comment">
                <CommentFormBody tweetFooterData={this.props.tweetFooterData} handleFormClose={this.handleFormClose}/>
            </div>
        )
    }
}

export default CommentForm;