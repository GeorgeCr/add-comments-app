import React, { Component } from 'react';

class CloseComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            onGoing: false
        };
    }

    render() {
        return (
            <div className="close-button">
                <img src={require('../../assets/img/closeWindow.svg')} alt="close-winow" />
            </div>
        )
    }
}

export default CloseComment;