import React from "react";
import EditProfile from "../EditProfile/EditProfile";
import './ProfileHeader.css';

export default function ProfileHeader({ user, userProfile, updateProfile, handleChange, updatedProfile }) {

    console.log('userProfile', userProfile)
    return (
        <>
            <div className="profile-container">
                <div className="header">
                    <img src="https://i.imgur.com/i8FBGNE.jpg" className="header" alt="" />
                    <div className="avatar">
                        {/* <h1>Test Spot</h1> */}
                        {/* <img src={userProfile?.photo ? `${userProfile.photo}` : 'need to edit'} className="avatar" alt="" /> */}
                        { userProfile?.photo ? <img src={userProfile.photo} className="avatar" alt="" /> : <h3>No Photo Added</h3>}
                    </div>
                </div>


                <div className="bio">
                    <div className="bio">
                        <h3>{userProfile?.name ? userProfile.name : 'need to edit'}</h3>
                        <h6>@OnThatTwitterGame</h6>
                        <h5>Interests: {userProfile?.interests ? userProfile.interests : 'need to edit'}</h5>
                        <h5>{userProfile?.location ? userProfile.location : 'need to edit'}</h5>
                        <h5>Member Since: {userProfile?.createdAt ? userProfile.createdAt : 'need to edit'}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}