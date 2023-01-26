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

    const [tweets, setTweets] = useState([]);

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

    useEffect(() => {
        const tokenData = localStorage.getItem("token");
        if (tokenData && tokenData !== "null" && tokenData !== "undefined") {
            setToken(JSON.parse(tokenData));
        }
    }, []);

    return (
        <main className="appContainer">
            {user ? (
                <Homepage
                    user={user}
                    token={token}
                    createTweet={createTweet}
                    setTweet={setTweet}
                    tweet={tweet}
                />
            ) : (
                <Register setUser={setUser} setToken={setToken} token={token} />
            )}
        </main>
    );
}
