import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import './styles.css'

export default function App(){
    return(
        <div className="appContainer">
            <Sidebar/>
            <h1>Welcome to Bitter</h1>

            <Feed />

            <Widgets />

        </div>
    )
}