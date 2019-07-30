import React from 'react';

function UserName(props) {
    return (
        <div className="user-name">
            <div className="user-actual-name">Name             <img src={require('../../assets/img/check-alt.png')} alt="verified"></img></div>
            <div className="user-link">@name1234</div>
        </div>
    )
}

export default UserName;