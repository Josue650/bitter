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





export default function Sidebar(){
    return(
        <div className='sidebar'>
            <EmojiFoodBeverageIcon className="sidebar_bitterIcon"/>
            <SidebarOptions active Icon={HomeIcon} text='Home'/>
            <SidebarOptions Icon={SearchIcon} text='Search'/>
            <SidebarOptions Icon={NotificationsIcon} text='Notifications'/>
            <SidebarOptions Icon={MailOutlineIcon} text='Message'/>
            <SidebarOptions Icon={BookmarkBorderIcon} text='Bookmarks'/>
            <SidebarOptions Icon={ListIcon} text='Lists'/>
            <SidebarOptions Icon={PersonIcon} text='Profile'/>
            <SidebarOptions Icon={MoreHorizIcon} text='More'/>

            <Button variant="outlined" className='sidebar_bleepBtn' fullWidth>Bleep</Button>
        </div>
    )
}