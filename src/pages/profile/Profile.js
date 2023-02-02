import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'


export default function Profile() {
    return (
        <div className='primary'>
            <Sidebar />
            <h1>Profile</h1>
            <div className="profile"></div>
            <div className="profile-info"></div>
            <div className="profile-head"></div>
            <div className='profile-img'></div>
            <div className='followers'></div>
        </div>
    )
}