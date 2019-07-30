import React, { Component } from 'react';
import UserImage from './UserImage';
import UserName from './UserName';
import '../Tweet/style/style.scss';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <UserImage />
                <UserName /> 
            </div>
        )
    }
}

export default UserInfo;