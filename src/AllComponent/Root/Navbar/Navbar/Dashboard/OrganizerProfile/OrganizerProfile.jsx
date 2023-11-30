import { NavLink } from "react-router-dom";
import Dashboard from "../Dashboard";



const OrganizerProfile = () => {




    return (
        <div className='flex bg-slate-400'>

            <div className="bg-gray-400  ">
                <Dashboard></Dashboard>
            </div>

            <div className='ml-10 mt-6  '>


                <ul className='flex gap-6'>
                    <li className='text-3xl btn btn-outline btn-ghost font-bold '> <NavLink>Purpose</NavLink> </li>
                    <li className='text-3xl font-bold btn btn-outline btn-secondary  text-end ml-96'> <NavLink to='/users'>User interation</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default OrganizerProfile;





