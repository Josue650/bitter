import "./sidebar.css"
import SidebarOptions from "../sidebarOptions/SidebarOptions";
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListIcon from '@mui/icons-material/List';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import Logout from '../../components/Logout/Logout'




export default function Sidebar({ user, setUser, userProfile, setUserProfile }) {
    // console.log("sidebar: ", user)
    return (
        <div className='sidebar'>
            <EmojiFoodBeverageIcon className="sidebar_bitterIcon" />
            <Link to='/' style={{ color: 'black', textDecoration: "none" }}>
                <SidebarOptions active Icon={HomeIcon} text='Home' />
            </Link>
            <SidebarOptions Icon={SearchIcon} text='Search' />
            <SidebarOptions Icon={NotificationsIcon} text='Notifications' />
            <SidebarOptions Icon={MailOutlineIcon} text='Message' />
            <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOptions Icon={ListIcon} text='Lists' />
            <Link to='/profile' style={{ color: 'black', textDecoration: "none" }}>
                <SidebarOptions Icon={PersonIcon} text='Profile' />
            </Link>
            <SidebarOptions Icon={MoreHorizIcon} text='More' />
            {user ?
                <Logout
                    user={user}
                    setUser={setUser}
                /> : ''}
            <Button variant="outlined" className='sidebar_bleepBtn' fullWidth>Bleep</Button>

        </div>
    )
}