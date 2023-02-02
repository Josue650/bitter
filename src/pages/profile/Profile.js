import React from 'react'
import './Profile.css'
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Follows from '../../components/Follows/follows';
import EditButton from '../../components/EditButton/EditButton';
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Widgets from "../../components/Widgets/Widgets";
import TweetForm from '../../components/tweetForm/TweetForm';



export default function Profile({
    user,
    createTweet,
    token,
    setTweet,
    tweet,
}) {


    return (
        <>
            <ProfileHeader />
            <Follows />
            <EditButton />
            <Sidebar />
            <TweetForm
                user={user}
                createTweet={createTweet}
                token={token}
                setTweet={setTweet}
                tweet={tweet}
            />
            <Feed />
            <Widgets />
        </>
    )
}