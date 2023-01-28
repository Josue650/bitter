import React from "react";
import './Post.css';
import { Avatar } from "@mui/material";
import { Verified } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Repeat } from "@mui/icons-material";
import { FavoriteBorder } from "@mui/icons-material";
import { Publish } from "@mui/icons-material";

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <>
        <div className="post">
            <div className="post__avatar">
            <Avatar src="https://mystickermania.com/cdn/stickers/90-512x512.png" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Bitter Team {" "}
                             <span className="post__headerSpecial">
                                <Verified className="post__badge"></Verified>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescripton">
                        <p>Bitter Team is the G.O.A.T!</p>
                    </div>
                </div>
                <img src="https://media.tenor.com/TC9xkKYp6wIAAAAd/goat.gif" alt="goat"></img>
            </div>
            
        </div>
        <div className="post__footer">
        <ChatBubbleOutline fontSize="small" />
        <Repeat fontSize="small" />
        <FavoriteBorder fontSize="small" />
        <Publish fontSize="small" />
    </div>
    </>
    )
}

export default Post