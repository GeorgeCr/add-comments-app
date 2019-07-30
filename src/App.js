import React, { Component } from 'react';
import Tweet from './components/Tweet/Tweet';
import Comment from './components/Comment/Comment';
import './App.scss';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Tweet />
                <Comment />
                <Comment />
                <Comment />
            </div>
        );
    }
}

export default App;