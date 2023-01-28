import React from "react";
import "./Widgets.css";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed"
// import { Search } from "@mui/icons-material";
import Search from "@mui/icons-material/Search";

function Widgets() {
    return(
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1618837765269098496"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="taylorswift13"
                options={{ height: 400 }} 
                />

                <TwitterShareButton
                    url={"https://facebook.com/TaylorSwift"}
                    options={{ text: "T-Swizzle is awesome", via: "taylorswift13"}} 
                />
            </div>
        </div>
    )
}

export default Widgets