
import { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";
import Register from '../register/Register'
// import { getUser } from '../../utilities/user-service'



export default function Homepage() {
    const [user, setUser] = useState(null);

    const [currentUser, setCurrentUser] = useState(null)

    const [token, setToken] = useState("");

    const [tweet, setTweet] = useState({
        userId: '',
        username: '',
        text: "",
    });


    const [tweets, setTweets] = useState([]);

    const [comments, setComments] = useState([])

    const [comment, setComment] = useState({
        userId: '',
        text: ''
    })


    const [randomProfile, setRandomProfile] = useState(null)

    const [unfollowProfile, setUnfollowProfile] = useState([])

    const [followersProfile, setFollowersProfile] = useState([])



    const [toggleComment, setToggleComment] = useState(false)



    const createTweet = async (userId, username) => {
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
                userId: userId,
                username: username,
                text: " ",
            });
        }
    };

    const getAllTweets = async () => {
        try {
            const response = await fetch('/api/tweets', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setTweets(data)
        } catch (error) {
            console.error(error)
        }
    }

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

    const editTweet = async (tweetId, updatedTweet) => {
        try {
            const response = await fetch(`/api/tweets/${tweetId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify(updatedTweet)
            })
            const data = await response.json()
            const tweetsCopy = [...tweets]
            const index = tweetsCopy.findIndex(tweet => tweetId === tweet._id)
            tweetsCopy[index] = { ...tweetsCopy[index], ...updatedTweet }
            setTweet(data)
        } catch (err) {
            console.error(err)
        }
    }

    const getOneTweet = async (tweetId) => {
        try {
            const response = await fetch(`/api/tweets/${tweetId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setUserTweet(data)
        } catch (error) {
            console.log(error)
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

    const getAllComments = async (tweetId, commentId) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}/${commentId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            setTweets(data)
        } catch (error) {
            console.error(error)
        }
    }

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

    const editComment = async (tweetId, id, updatedComment) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify({
                    ...comment,
                    userId: user._id,
                    text: updatedComment
                })
            })
            const data = await response.json()
            setComment(data)
        } catch (err) {
            console.error(err)
        }
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

    const followProfile = async (followerId) => {
        try {
            const response = await fetch(`/api/profile/${followerId}/follow`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify()
            })
            const data = await response.json()
            setFollowersProfile(data)
        } catch (err) {
            console.log(err)
        }
    }

    const getRandomProfile = async (randomId) => {
        try {
            const response = await fetch(`/api/profile/random/${randomId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = response.json()
            setRandomProfile()
        } catch (err) {
            console.log(err)
        }
    }

    const getUnfollowProfile = async (followId) => {
        try {
            const response = await fetch(`/api/profile/${followId}/unfollow`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = response.json()
            setUnfollowProfile()
        } catch (err) {
            console.log(err)
        }
    }

    // const getLikes = async (tweetId) => {
    //     try {
    //         const response = await fetch(`/api/tweets/${tweetId}/like`, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    //             }
    //         })
    //         const data = await response.json()
    //         setLikes(data)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }

    useEffect(() => {
        const tokenData = localStorage.getItem("token");
        if (tokenData && tokenData !== "null" && tokenData !== "undefined") {
            setToken(JSON.parse(tokenData));
        }
        getUser()
        getAllTweets()
    }, [token, toggleComment])


    useEffect(() => {
        const tokenData = localStorage.getItem('token')
        if (tokenData && tokenData !== 'null' && tokenData !== 'undefined') {
            setToken(JSON.parse(tokenData))
        }
    }, [])


    return (
        <div>
            {user ? (
                <>
                    <div className="tweetForm-container">
                        <h1>Home</h1>
                        <Sidebar />
                        <Feed
                            user={user}
                            tweet={tweet}
                            tweets={tweets}
                            createTweet={createTweet}
                            setTweet={setTweet}
                            deleteTweet={deleteTweet}
                            editTweet={editTweet}
                            comment={comment}
                            setComment={setComment}
                            createComment={createComment}
                            currentUser={currentUser}
                            followProfile={followProfile}
                            setFollowersProfile={setFollowersProfile}
                            followersProfile={followersProfile}
                            getAllTweets={getAllTweets}
                        />
                        <Widgets />
                    </div>
                </>
            ) : (
                <Register user={user} setUser={setUser} setToken={setToken} token={token} />
            )}
        </div>
    )
}




