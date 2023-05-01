import Widgets from "../../components/Widgets/Widgets";
import SidebarOptions from "../../components/sidebarOptions/SidebarOptions";
import ExploreTweets from '../../components/exploreTweets/ExploreTweets'

export default function Explore() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className='px-6'>
                <SidebarOptions />
            </div>
            <div className='col-span-2 boreder-x-2 border-t-slate-800px px-6'>
                <ExploreTweets />
            </div>
            <div className='px-6'>
                <Widgets />
            </div>
        </div>
    )
}
