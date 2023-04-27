// import styles from './UserLogOut.module.scss'
import { useNavigate } from "react-router-dom";

export default function Logout({ user, setUser, userProfile }) {
    // console.log("Logout: ", user)
    const navigate = useNavigate()

    function logOut() {
        window.localStorage.removeItem('token')
    }

    function handleLogOut() {
        logOut();
        setUser(null);
        navigate('/')
    }

    return (
        <div>
            {/* <div>{user.username}</div>
            <div>{user.email}</div> */}
            <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
        </div>
    );
}