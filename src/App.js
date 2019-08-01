import React, { Component } from 'react';
import Tweet from './components/Tweet/Tweet';
import CommentForm from './components/Comment/CommentForm/CommentForm';
import './App.scss';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.props.data;
    }

    updateTweetLikes = (newState) => {
        this.setState({newState});
    }

    updateTweetRetweets = (newState) => {
        this.setState({newState});
    }


    updateTweetComments = (isCommentOpen = true) => {
        // // console.log(newState);
        // const currentState = {...this.state};
        // currentState.tweet.isCommentOpen = isCommentOpen;
        // // this.setState(currentState);
        // console.log(currentState);
    }

    render() {
        return (
            <div className="app">
                <Tweet data={this.state} onLike={this.updateTweetLikes} onRetweet={this.updateTweetRetweets} onComment={this.updateTweetComments} />
                <CommentForm commenting={this.updateTweetComments} />
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"             title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
                {/* <div>Icons made by <a href="https://www.flaticon.com/authors/hadrien" title="Hadrien">Hadrien</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/"                 title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div> */}
            </div>
        );
    }
}

export default App;