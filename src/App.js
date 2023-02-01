import React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import Register from "./pages/register/Register";
import Homepage from "./pages/homepage/Homepage";


export default function App() {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [tweet, setTweet] = useState({
        text: "",
    });
    const [userTweets, setUserTweets] = useState([])
    const [tweets, setTweets] = useState([]);
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({
        text: ''
    })
    const [profile, setProfile] = useState({
        dob: undefined,
        name: undefined,
        location: undefined,
        interests: undefined,
        photo: undefined,
    })

    const [toggleComment, setToggleComment] = useState(false)
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
            console.log(response);
            const data = await response.json();
            console.log(data);
            setTweets([data, ...tweets]);
        } catch (error) {
            console.error(error);
        } finally {
            setTweet({
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

    const editTweet = async (id, updatedTweet) => {
        try {
            const response = await fetch(`/api/tweets/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify({ ...tweet, text: updatedTweet })
            })
            const data = await response.json()
            console.log(data)
            setTweet(data)
        } catch (err) {
            console.error(err)
        }
    }


    const createComment = async (tweetId) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ ...comment }),
            });
            console.log(response);
            const data = await response.json();
            console.log(data);
            setComments([data, ...comments]);
            setToggleComment(!toggleComment)
        } catch (error) {
            console.error(error);
        } finally {
            setComment({
                text: " ",
            });
        }
    };

    const getAllComments = async (tweetId) => {
        try {
            const response = await fetch(`/api/comments/${tweetId}`, {
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
                body: JSON.stringify({ ...comment, text: updatedComment })
            })
            const data = await response.json()
            console.log(data)
            setComment(data)
        } catch (err) {
            console.error(err)
        }
    }

    const getUserProfile = async () => {
        try {
            const response = await fetch('/api/users/profile', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                }
            })
            const data = await response.json()
            console.log(data)
            setProfile(data)
        } catch (error) {
            console.error(error)
        }
    }

    const updateUserProfile = async (id, updatedProfile) => {
        try {
            const response = await fetch(`/api/profile/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`
                },
                body: JSON.stringify(updatedProfile)
            })
            const data = response.json()
            console.log(data)
            setProfile(data)
        } catch (err) {
            console.log(err)
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
            console.log(data)
            setUserTweets(data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        const tokenData = localStorage.getItem("token");
        if (tokenData && tokenData !== "null" && tokenData !== "undefined") {
            setToken(JSON.parse(tokenData));
        }
        getAllTweets()
        getUserProfile()
    }, [token, toggleComment])

    useEffect(() => {
        const tokenData = localStorage.getItem("token");
        if (tokenData && tokenData !== "null" && tokenData !== "undefined") {
            setToken(JSON.parse(tokenData));
        }
    }, []);

    return (
        <main className="appContainer">
            {user ? (
                <>
                    <Homepage
                        user={user}
                        token={token}
                        tweet={tweet}
                        setTweet={setTweet}
                        userTweets={userTweets}
                        setUserTweets={setUserTweets}
                        tweets={tweets}
                        setTweets={setTweets}
                        comments={comments}
                        setComments={setComments}
                        comment={comment}
                        setComment={setComment}
                        profile={profile}
                        setProfile={setProfile}
                        createTweet={createTweet}
                        getAllTweets={getAllTweets}
                        deleteTweet={deleteTweet}
                        editTweet={editTweet}
                        createComment={createComment}
                        getAllComments={getAllComments}
                        deleteComment={deleteComment}
                        editComment={editComment}
                        getUserProfile={getUserProfile}
                        updateUserProfile={updateUserProfile}
                        getAUserTweets={getAUserTweets}
                    />
                </>
            ) : (
                <Register setUser={setUser} setToken={setToken} token={token} />
            )
            }
        </main>
    );
}
