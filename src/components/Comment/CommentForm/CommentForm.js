import React from 'react';
import CommentFormBody from './CommentFormBody';
import '../style/style.scss';

function CommentForm(props) {
    const isCommenting = props.commenting();
    console.log(isCommenting, 'iscommenting');
    if (isCommenting) {
        return (
            <div className="comment">
                <CommentFormBody />
            </div>
        )
    }
    return null;
}

export default CommentForm;