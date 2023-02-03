import { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import EditProfile from '../../components/EditProfile/EditProfile'


export default function Profile() {

    const [userProfile, setUserProfile] = useState(null)
    const [followers, setFollowers] = useState([])
    const [userTweets, setUserTweets] = useState([])
    const [foundProfile, setFoundProfile] = useState(null)
    const [updatedProfile, setUpdatedProfile] = useState({
        dob: '',
        name: '',
        location: '',
        interests: '',
        photo: '',
    })

    const [toggle, setToggle] = useState(false)

    const handleChange = (e) => {
        e.preventDefault()
        setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value })
    }

    const getAUserTweets = async () => {
        try {
            const response = await fetch('/api/profile/tweets', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            console.log('users tweets', data)
            setUserTweets(data)
        } catch (err) {
            console.log(err)
        }
    }

    const getProfile = async () => {
        try {
            const response = await fetch('/api/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            console.log('profile data', data)
            setUserProfile(data)
        } catch (error) {
            console.error(error)
        }
    }

    const getFollowers = async () => {
        try {
            const response = await fetch('/api/profile/followers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setFollowers()
        } catch (err) {
            console.log(err)
        }
    }



    const updateProfile = async (profileId, updatedProfile) => {
        try {
            const response = await fetch(`/api/profile/${profileId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify(updatedProfile)
            })
            const data = await response.json()
            console.log('updatedProfile', data)
            setUserProfile(data)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getProfile()
        getFollowers()
        getAUserTweets()
    }, [])


    return (
        <div className='primary'>
            <Sidebar />
            <h1>Profile</h1>
            <button onClick={() => setToggle(!toggle)}>Edit</button>
            {
                toggle === true ?
                    (<EditProfile
                        userProfile={userProfile}
                        updateProfile={updateProfile}
                        handleChange={handleChange}
                        updatedProfile={updatedProfile}
                    />)
                    :
                    ''
            }
        </div>
    )
}