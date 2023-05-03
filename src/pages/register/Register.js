// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import { useDispatch } from 'react-redux'
// import { loginStart, loginSuccess, loginFailed } from '../../redux/userSlice'


// export default function Register() {

//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')

//   const dispatch = useDispatch()

//   const handleLogin = async (e) => {
//     dispatch(loginStart())
//     e.preventDefault();
//     try {
//       const res = await axios.post('/api/users/login', { email, password })
//       dispatch(loginSuccess(res.data))
//       console.log('res', res.data)
//     } catch (err) {
//       dispatch(loginFailed())
//     }
//   }


//   return (
//     <form className="bg-gray-200  flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
//       <h2 className="text-3xl font-bold text-center">Sign into Bitter</h2>

//       <input
//         onChange={(e) => setEmail(e.target.value)}
//         type='text'
//         placeholder="email"
//         className="text-xl py-2 rounded-full px-4 ">
//       </input>
//       <input
//         onChange={(e) => setPassword(e.target.value)}
//         type='password'
//         placeholder="password"
//         className="text-xl py-2 rounde d-full px-4 ">
//       </input>
//       <button
//         className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
//         onClick={handleLogin}
//       >
//         Sign in
//       </button>
//       <p className="text-center text-xl">Dont have an account?</p>
//       <input
//         type='text'
//         placeholder="username"
//         className="text-xl py-2 rounded-full px-4 ">
//       </input>
//       <input
//         type='email'
//         placeholder="email"
//         reuired
//         className="text-xl py-2 rounded-full px-4 ">
//       </input>
//       <input
//         type='password'
//         placeholder="password"
//         className="text-xl py-2 rounded-full px-4 ">
//       </input>
//       <button
//         className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
//         type="submit">
//         Sign up</button>
//     </form>
//   )
// }


import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import SignUp from "../../components/SignUp/SignUp";
// import Login from "../../components/Login/Login";
// import Sidebar from "../../components/sidebar/Sidebar"

export default function Register() {

  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  // const [credentials, setCredentials] = useState({
  //   username: '',
  //   email: "",
  //   password: "",
  // });
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  // const [showSignUp, setShowSignUp] = useState(true);

  // const handleChangeAuth = (event) => {
  //   setCredentials({ ...credentials, [event.target.name]: event.target.value });
  // };

  const login = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password
        }), // turn object into data
      });
      const tokenResponse = await response.json();
      setToken(tokenResponse);
      localStorage.setItem("token", JSON.stringify(tokenResponse));
      navigate('/')
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
    }
  };

  const signUp = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, email }),
      });
      const tokenResponse = await response.json();
      if (tokenResponse.code === 11000) {
        setErrorMessage('Don\'t be bitter email already is taken');
        return;
      }
      setToken(tokenResponse);
      localStorage.setItem("token", JSON.stringify(tokenResponse));
      // window.location.reload();
      navigate('/')
    } catch (error) {
      console.error(error);
    } finally {
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
    console.log('data', data)
  }, []);



  return (
    <form className="bg-gray-200  flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign into Bitter</h2>

      <input
        onChange={(e) => setEmail(e.target.value)}
        type='text'
        placeholder="email"
        className="text-xl py-2 rounded-full px-4 ">
      </input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder="password"
        className="text-xl py-2 rounde d-full px-4 ">
      </input>
      <button
        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
        onClick={login}
      >
        Sign in
      </button>
      <p className="text-center text-xl">Dont have an account?</p>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        placeholder="username"
        className="text-xl py-2 rounded-full px-4 ">
      </input>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type='email'
        placeholder="email"
        reuired
        className="text-xl py-2 rounded-full px-4 ">
      </input>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder="password"
        className="text-xl py-2 rounded-full px-4 ">
      </input>
      <button
        className="text-xl py-2 rounded-full px-4 bg-blue-500 text-white"
        type="submit"
        onClick={signUp}
      >
        Sign up</button>
    </form>
  )
  //   <>
  //     {
  //       <>
  //         {
  //           user ?
  //             <Sidebar />
  //             :
  //             <>


  //               <div className="register-container">
  //                 <div className="coffee-hand"></div>
  //                 <div className="coffee-plate"></div>


  //                 {

  //                   showSignUp
  //                     ? <SignUp
  //                       credentials={credentials}
  //                       handleChangeAuth={handleChangeAuth}
  //                       signUp={signUp}
  //                       setUser={setUser} />

  //                     : <Login
  //                       className="login-style"
  //                       login={login}
  //                       credentials={credentials}
  //                       handleChangeAuth={handleChangeAuth}
  //                       setUser={setUser}
  //                     />
  //                 }
  //                 <div className="slogan">
  //                   {showSignUp ? 'Don\'t have an account? Register Here' : 'Welcome Back!'}
  //                 </div>
  //                 <button
  //                   className="signup-btn"
  //                   onClick={() => {
  //                     setShowSignUp(!showSignUp)
  //                   }}>Already a member of bitter?
  //                 </button>
  //               </div>

  //             </>

  //         }
  //       </>
  //     }

  //   </>
  // );
}
