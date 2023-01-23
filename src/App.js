import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import './styles.css'

export default function App(){
    return(
        <div className="appContainer">
            <Sidebar/>
            <h1>Welcome to Bitter</h1>
        </div>
    )
}