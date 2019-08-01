import React, { Component } from 'react';

class CommentFormBody extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentInput: '',
            // isCommentSent: false,
            // isWindowOpen: true,
        };
    }

    getInput = (event) => {
        this.setState({
            commentInput: event.target.value
        });
    }

    fireSend = () => {
        this.setState({
            isCommentSent: true
        });
    }

    closeWindowForm = () => {
        let  { isCommentFormOpen } = this.props.tweetFooterData;
        this.props.handleFormClose(isCommentFormOpen);
    }

    render() {
        return (
            <div>
                <form>
                    <div className="comment-interaction">
                        <textarea rows="3" columns="50" placeholder="Tweet your reply" onChange={this.getInput} />
                        <div className="close-button" onClick={this.closeWindowForm} >
                            <img src={require('../../../assets/img/closeWindow.svg')} alt="close-winow" />
                        </div>
                    </div>
                    <input className="reply-button" type="button" value="Reply" onClick={this.fireSend} />
                </form>
            </div>
        )
    }
}

export default CommentFormBody;