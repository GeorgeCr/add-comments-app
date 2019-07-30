import React, { Component } from 'react';
import UserImage from './UserImage';
import UserName from './UserName';


class UserInfo extends Component {
    render() {
        return (
            <div>
                <UserImage />
                <UserName /> 
            </div>
        )
    }
}

export default UserInfo;