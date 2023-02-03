export default function EditProfile({
    userProfile,
    updateProfile,
    handleChange,
    updatedProfile,
    toggle,
    setToggle
}) {
    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    updateProfile(userProfile._id, updatedProfile)
                    setToggle(!toggle)
                }}>
                <h1>Edit Profile Here</h1>
                <input className='user-dob' type='text' defaultValue={userProfile.dob} name='dob' onChange={handleChange} placeholder={'Date of Birth mm/dd'}></input>
                <input className='user-name' type='text' defaultValue={userProfile.name} name='name' onChange={handleChange} placeholder={'Name'}></input>
                <input className='user-location' type='text' defaultValue={userProfile.location} name='location' onChange={handleChange} placeholder={'Location'}></input>
                <input className='user-interests' type='text' defaultValue={userProfile.interest} name='interests' onChange={handleChange} placeholder={'Interests'}></input>
                <input className='user-photo' type='text' defaultValue={userProfile.photo} name='photo' onChange={handleChange} placeholder={'Photo'}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}