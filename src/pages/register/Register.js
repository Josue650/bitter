import { useState, useEffect } from "react";
import SignUp from "../../components/SignUp/SignUp";
import Login from "../../components/Login/Login";

export default function Register({ setUser, setToken, token }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [showSignUp, setShowSignUp] = useState(true);

  const handleChangeAuth = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const login = async () => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }), // turn object into data
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem("token", JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };

  const signUp = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...credentials }),
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem("token", JSON.stringify(tokenResponse));
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };

  useEffect(() => {
    const getToken = () => {
      const token = window.localStorage.getItem("token");
      if (!token || token === "null" || token === "undefined") return null;
      const payload = JSON.parse(
        window.atob(decodeURIComponent(token.split(".")[1]))
      );
      if (payload.exp < Date.now() / 1000) {
        window.localStorage.removeItem("token");
        return null;
      }
      return token;
    };
    const token = getToken();
    const data = token
      ? JSON.parse(window.atob(decodeURIComponent(token.split(".")[1]))).user
      : null;
    setUser(data);
  }, []);

  return (
    <>
      {
        <>
          <button
            onClick={() => {
              setShowSignUp(!showSignUp);
            }}
          ></button>
          {showSignUp ? (
            <SignUp
              credentials={credentials}
              handleChangeAuth={handleChangeAuth}
              signUp={signUp}
              setUser={setUser}
            />
          ) : (
            <Login
              login={login}
              credentials={credentials}
              handleChangeAuth={handleChangeAuth}
              setUser={setUser}
            />
          )}
          {showSignUp
            ? "Don/t have an account? Register Here"
            : "Welcome Back. Login in as an exisiting user or Click Here To Sign Up With A New Account"}
        </>
      }
    </>
  );
}