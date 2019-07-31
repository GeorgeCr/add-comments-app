import React from 'react';

function UserName(props) {
    return (
        <div className="user-name">
            <div className="user-actual-name">
                {props.userBasicInfo.userName} <img className={!props.userBasicInfo.verified ? 'hidden' : ''} src={require('../../assets/img/check-alt.png')} alt="verified"></img>
            </div>
            <div className="user-link">{props.userBasicInfo.userLink}</div>
        </div>
    )
}

export default UserName;