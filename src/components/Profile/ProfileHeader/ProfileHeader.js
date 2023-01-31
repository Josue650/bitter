// import { useContext, useEffect, useState } from 'react'
// import { useStreamContext } from 'react-activity-feed'
// import { useNavigate } from 'react-router-dom'
// import './ProfileHeader.css'

// import ArrowLeft from '@mui/icons-material/ArrowLeft'
// import { ProfileContext } from '../ProfileContent/ProfileContent'



// export default function ProfileHeader() {
//     const navigate = useNavigate()
//     const { user } = useContext(ProfileContext)
//     const { client } = useStreamContext()
  
//     const [activitiesCount, setActivitiesCount] = useState(0)
  
//     useEffect(() => {
//       const feed = client.feed('user', user.id)
  
//       async function getActivitiesCount() {
//         const activities = await feed.get()
  
//         setActivitiesCount(activities.results.length)
//       }
  
//       getActivitiesCount()
//     }, [])
  
//     const navigateBack = () => {
//       navigate(-1)
//     }
  
//     return (
//       <>
//         <div className="top">
//           <button onClick={navigateBack}>
//             <ArrowLeft size={20} color="white" />
//           </button>
//           <div className="info">
//             <h1>{user.data.name}</h1>
//             <span className="info__tweets-count">{activitiesCount} Tweets</span>
//           </div>
//         </div>
//         <div className="cover">
//           <img src="https://picsum.photos/500/300" />
//         </div>
//       </>
//     )
// }
  