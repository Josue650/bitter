import React from "react";
import './ProfileHeader.css';

export default function ProfileHeader({ userProfile }) {

    console.log('userProfile', userProfile)
    return (
        <div className="profile-container">
            <div className="header">
                <img src="https://i.imgur.com/i8FBGNE.jpg" class="header" alt="" />
                <div className="avatar">
                    <img src={userProfile.photo} class="avatar" alt="" />
                </div></div>


            <div className="bio">
                <div className="bio">
                    <h3>{userProfile.name}</h3>
                    <h6>@OnThatTwitterGame</h6>
                    <h5>Interests: {userProfile.interests}</h5>
                    <h5>{userProfile.location}</h5>
                    <h5>Member Since: {userProfile.createdAt}</h5>
                </div>
            </div>
        </div>

    )
}