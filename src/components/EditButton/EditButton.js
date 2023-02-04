import React from "react";
import './EditButton.css';
import EditProfile from "../EditProfile/EditProfile";
import { useState } from "react";

export default function EditButton({ userProfile, updateProfile, handleChange, updatedProfile }) {

    const [toggle, setToggle] = useState(false)

    return (
        <>
            <button onClick={() => setToggle(!toggle)}>Edit</button>
            {
                toggle === true ?
                    (<EditProfile
                        userProfile={userProfile}
                        updateProfile={updateProfile}
                        handleChange={handleChange}
                        updatedProfile={updatedProfile}
                        toggle={toggle}
                        setToggle={setToggle}
                    />)
                    :
                    ''
            }
        </>
    )
}



{/* <button class="edit-button" id="button" onClick={() => setToggle(!toggle)}>Edit Profile</button>
            {toggle === true ? (
                <EditProfile />
            ) :
                ''} */}