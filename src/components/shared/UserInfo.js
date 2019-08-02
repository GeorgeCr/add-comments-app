import React, { Component } from 'react';
import UserImage from './UserImage';
import UserName from './UserName';

class UserInfo extends Component {
    render() {
        return (
            <div className="user-info">
                <UserImage userImage={this.props.userInfo.image} />
                <UserName userBasicInfo={this.props.userInfo} /> 
            </div>
        )
    }
}

export default UserInfo;