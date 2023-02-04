// import styles from './UserLogOut.module.scss'

export default function Logout({ user, setUser }) {

    function logOut() {
        window.localStorage.removeItem('token')
    }

    function handleLogOut() {
        logOut();
        setUser(null);
    }

    return (
        <div>
            <div>{user.name}</div>
            <div>{user.email}</div>
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}