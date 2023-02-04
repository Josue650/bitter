import React from 'react'

export default function Follows() {
    return (
        <><div className="user-follows">
            <span className="user-follows-following">
                {/* <b>{user.following-count || 0}</b> Following */}
                <p>0 Following</p>
            </span>
            <span className="user-follows-followers">
                {/* <b>{user.followers-count || 0}</b> Followers */}
                <p>0 Followers</p>
            </span>
        </div><div className="user-followed-by">
                Not followed by anyone you are following
            </div></>

    )
}