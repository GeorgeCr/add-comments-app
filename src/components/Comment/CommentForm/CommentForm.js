import React from 'react';
import CommentFormBody from './CommentFormBody';
import '../style/style.scss';

function CommentForm(props) {
    return (
        <div className="comment">
            <CommentFormBody />
        </div>
    )
}

export default CommentForm;