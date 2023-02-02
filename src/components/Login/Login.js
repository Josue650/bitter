export default function Login({
    login,
    credentials,
    handleChangeAuth,
}) {
    return (
        <div className="login-Container">
            <form onSubmit={(e) => {
                e.preventDefault()
                login()
            }}>
                <h1>Log in to Bitter</h1>
                <input className='username-input' type='text' value={credentials.username} name='username' onChange={handleChangeAuth} placeholder={'Username'}></input>
                <input type='text' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder={'Email Here'}></input>
                <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth} placeholder={'Password'}></input>
                <input type='submit' value="Log in"></input>
            </form>
        </div>
    )
}
