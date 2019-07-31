import React from 'react';
import './style/style.scss';

function UserImage(props) {
    return (
        <div className="user-image">
            <img src={props.userImage} alt="geo" />
        </div>
    );
}

// woman: https://www.w3schools.com/howto/img_avatar2.png

// https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60

export default UserImage;