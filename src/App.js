import React from "react";
import './styles.css'
import { useState, useEffect } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Register from "./pages/register/Register";

export default function App() {

    const [user, setUser ] = useState(null)

    return (
        <main className="appContainer">
            {
                user ?
                    <>
                        <Sidebar />
                        <h1>Welcome to Bitter</h1>
                    </>
                    :
                    <>
                    <Register setUser={setUser}/>
                    </>
            }
        </main>
    );
}