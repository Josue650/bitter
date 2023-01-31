// import { useContext } from 'react'
// import './ProfileBio.css'
// import { format } from 'date-fns'
// // import { useStreamContext } from 'react-activity-feed'

// import More from '@mui/icons-material/More'
// import Mail from '@mui/icons-material/Mail'
// // import Calendar from '../Icons/Calendar'
// // import { formatStringWithLink } from '../../utils/string'
// import { ProfileContext } from '../ProfileContent/ProfileContent'
// // import FollowBtn from '../FollowBtn'
// import FollowBtn from '../../FollowBtn/FollowBtn'

// const actions = [
//   {
//     Icon: More,
//     id: 'more',
//   },
//   {
//     Icon: Mail,
//     id: 'message',
//   },
// ]

// export default function ProfileBio() {
//   const { user } = useContext(ProfileContext)

//   const joinedDate = format(new Date(user.created_at), 'MMMM RRRR')

//   // const bio = formatStringWithLink(user.data.bio)

//   // const isLoggedInUserProfile = user.id === client.userId 

//   return (
//     <container>
//       <div className="top">
//         <div className="image">
//           {' '}
//           <img src={user.data.image} alt="" />
//         </div>
//         {/* {!isLoggedInUserProfile && (
//           <div className="actions">
//             {actions.map((action) => (
//               <button className="action-btn" key={action.id}>
//                 <action.Icon color="white" size={21} />
//               </button>
//             ))}
//             <FollowBtn userId={user.id} />
//           </div>
//         )} */}
//       </div>
//       <div className="details">
//         <span className="user__name">{user.data.name}</span>
//         <span className="user__id">@{user.id}</span>
//         {/* <span className="user__bio" dangerouslySetInnerHTML={{ __html: bio }} /> */}
//         <div className="user__joined">
//           {/* <Calendar color="#777" size={20} /> */}
//           <span className="user__joined--text">Joined {joinedDate}</span>
//         </div>
//         <div className="user__follows">
//           <span className="user__follows__following">
//             <b>{user.following_count || 0}</b> Following
//           </span>
//           <span className="user__follows__followers">
//             <b>{user.followers_count || 0}</b> Followers
//           </span>
//         </div>
//         <div className="user__followed-by">
//           Not followed by anyone you are following
//         </div>
//       </div>
//     </container>
//   )
// }