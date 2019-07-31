import React from 'react';

function UserName(props) {
    return (
        <div className="user-name">
            <div className="user-actual-name">John Doe             <img src={require('../../assets/img/check-alt.png')} alt="verified"></img></div>
            <div className="user-link">@johnDoe</div>
        </div>
    )
}

export default UserName;