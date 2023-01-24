import { useState } from "react"

export default function Login({setUser}){    

    const handleChangeAuth = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value}) 
    } 

    const [credentials, setCredentials] = useState({
        email: '', 
        password: '', 
    })
    const [token, setToken] = useState('')

    const login = async () => {
        try{
            const response = await fetch('/api/users/login', {
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({email: credentials.email, password: credentials.password}) // turn object into data
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        }catch(error){
            console.error(error)
        }
    }

    const signUp = async () => {
        try{
            const response = await fetch('/api/users', {
                method: "POST", 
                headers: {
                    'Content-Type': 'application/json'
                }, 
                body: JSON.stringify({...credentials}) 
            })
            const tokenResponse = await response.json()
            setToken(tokenResponse)
            localStorage.setItem('token', JSON.stringify(tokenResponse))
        }catch(error){
            console.error(error)
        }
    }


    return(
        <>
        <h2>Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            login()
        }}>
            <input type='text' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder={'Email Here'}></input>
            <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth}  placeholder={'Password'}></input>
            <input type='submit' value="Login as Existing User "></input>
        </form>
        <h2>SignUp</h2>
        <form onSubmit={(e) => {
            e.preventDefault()
            signUp()
        }}>
            <input type='email' value={credentials.email} name='email' onChange={handleChangeAuth}  placeholder={'Email'}></input>
            <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth}  placeholder={'Password'}></input>
            <input type='submit' value="Sign Up as New User"></input>
        </form>
        </>
        // <div className="loginContainer">
        //     <h1>Sign in to Bitter</h1>
        //     <form onSubmit={(e) => {
        //         e.preventDefault()
        //         signUp()
        //     }}>
        //         <button>Sign in using gmail</button>
        //         <button>Sign in with Apple</button>
        //         <h2> or </h2>
        //         <input type='name' value={credentials.name} name='name' onChange={handleChangeAuth}  placeholder={'Name'}></input>
        //         <input type='email' value={credentials.email} name='email' onChange={handleChangeAuth}  placeholder={'Email'}></input>
        //         <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth}  placeholder={'Password'}></input>
        //         <input type='submit' value="Sign Up as New User"></input>
        //         {/* <label for='email'>Email</label>
        //         <input type='email' placeholder="email here" id='email' name='email' />
        //         <label for='password'>Password</label>
        //         <input type='password' placeholder="******" id='password' name='password'/> */}
        //         <button onChange={handleChangeAuth}>Next</button>
        //     </form>

        //         <h2>Don't have an account?</h2>
        //         <button className="signupBtn">Sign Here</button>
        // </div>
    )
}