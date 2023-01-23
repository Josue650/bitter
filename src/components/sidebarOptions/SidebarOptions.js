import './sidebarOptions.css'

export default function SidebarOptions({ active, Icon, text}){
    return(
        <div className={`sidebarOptions ${active && 'sidebarOptions--active'}`} >
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}