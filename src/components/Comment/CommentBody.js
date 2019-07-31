import React, { Component } from 'react';
import CloseComment from './CloseComment';

class CommentBody extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="comment-interaction">
                        <textarea rows="3" columns="50" placeholder="Tweet your reply" />
                        <CloseComment />
                    </div>
                    <input className="reply-button" type="button" value="Reply" />
                </form>
            </div>
        )
    }
}

export default CommentBody;