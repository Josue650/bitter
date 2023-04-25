import { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import EditProfile from '../../components/EditProfile/EditProfile'
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Follows from '../../components/Follows/follows';
import EditButton from '../../components/EditButton/EditButton';
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";
import TweetForm from '../../components/tweetForm/TweetForm';
import UserFeed from '../../components/UserFeed/UserFeed';
import { useParams } from 'react-router-dom';



export default function UserProfile() {

    const { randomId } = useParams()
    console.log(randomId, "randomId")

    const [isLiked, setIsLiked] = useState(false);
    const [toggleComment, setToggleComment] = useState(false)
    const [user, setUser] = useState(null);
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
    const [tweet, setTweet] = useState({
        userId: '',
        username: '',
        text: "",
    });
    const [token, setToken] = useState("")
    const [tweets, setTweets] = useState([]);
    const [comments, setComments] = useState([])

    const [comment, setComment] = useState({
        userId: '',
        text: ''
    })

    const handleChange = (e) => {
        e.preventDefault()
        setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value })
    }

    const getUser = async () => {
        try {
            const response = await fetch('/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            console.log(data)
            setUser(data)
        } catch (error) {
            console.error(error)
        }
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
            // console.log('users tweets', data)
            setUserTweets(data)
        } catch (err) {
            console.log(err)
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



    const createTweet = async () => {
        try {
            const response = await fetch("/api/tweets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...tweet }),
            });
            const data = await response.json();
            setTweets([data, ...tweets]);
        } catch (error) {
            console.error(error);
        } finally {
            setTweet({
                text: " ",
            });
        }
    };


    const deleteTweet = async (id) => {
        try {
            const response = await fetch(`/api/tweets/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await response.json()
            const tweetsCopy = [...tweets]// need to make a copy before you can manutiplate the array 
            const index = tweetsCopy.findIndex(tweet => id === tweet._id) //find the id to delete from the list
            tweetsCopy.splice(index, 1)
            setTweets(tweetsCopy)
        } catch (error) {
            console.error(error)
        }
    }


    const createComment = async (tweetId, userId, username) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...comment }),
            });
            const data = await response.json();
            setComments([data, ...comments]);
            setToggleComment(!toggleComment)
        } catch (error) {
            console.error(error);
        } finally {
            setComment({
                userId: userId,
                username: username,
                text: " ",
            });
        }
    };


    const deleteComment = async (tweetId, commentId) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}/${commentId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            const commentsCopy = [...comments]// need to make a copy before you can manutiplate the array 
            const index = commentsCopy.findIndex(comment => commentId === comment._id) //find the id to delete from the list
            commentsCopy.splice(index, 1)
            setComments(commentsCopy)
            setToggleComment(!toggleComment)
        } catch (err) {
            console.error(err)
        }
    }


    const getUserProfile = async (randomId) => {
        try {
            const response = await fetch(`/api/profile/${randomId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            console.log(data, "data")
            setUserProfile(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getFollowers()
        getAUserTweets()
        getUser()
    }, [token])

    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
            setToken(JSON.parse(tokenData))
        }
    }, [toggleComment, isLiked])



    return (
        <>
            <Sidebar
                userProfile={userProfile}
                setUserProfile={setUserProfile}
                user={user}
                setUser={setUser}
            />
            <ProfileHeader
                user={user}
                userProfile={userProfile}
                handleChange={handleChange}
                updatedProfile={updatedProfile} />
            <Follows />
            <EditButton
                userProfile={userProfile}
                handleChange={handleChange}
                updatedProfile={updatedProfile}
            />

            <UserFeed
                userTweets={userTweets}
                user={user}
                createTweet={createTweet}
                deleteTweet={deleteTweet}
                comment={comment}
                setComment={setComment}
                createComment={createComment}
                deleteComment={deleteComment}
                isLiked={isLiked}
                setIsLiked={setIsLiked}
            />
            <Widgets />
        </>
    )
}





