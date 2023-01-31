export default function SignUp({
    signUp,
    credentials,
    handleChangeAuth
}) {
    return (
        <div className='signup-Container'>
            <form onSubmit={(e) => {
                e.preventDefault()
                signUp()
            }}>
                <h1 className="join">Join Bitter Today.</h1>
                <input className='username-input' type='text' value={credentials.username} name='username' onChange={handleChangeAuth} placeholder={'Username'}></input>
                <input className='email-input' type='email' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder={'Email'}></input>
                <input className='password' type='password' value={credentials.password} name='password' onChange={handleChangeAuth} placeholder={'Password'}></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}
