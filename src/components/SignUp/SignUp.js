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
                <h1>Join Bitter Today.</h1>
                <input type='email' value={credentials.email} name='email' onChange={handleChangeAuth} placeholder={'Email'}></input>
                <input type='password' value={credentials.password} name='password' onChange={handleChangeAuth} placeholder={'Password'}></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}