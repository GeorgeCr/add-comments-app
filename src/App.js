import React, { Component } from 'react';
import Tweet from './components/Tweet/Tweet';
import Comment from './components/Comment/Comment';


class App extends Component {
    render() {
        return (
            <div>
                <Tweet />
                <Comment />
                <Comment />
                <Comment />
            </div>
        );
    }
}

export default App;