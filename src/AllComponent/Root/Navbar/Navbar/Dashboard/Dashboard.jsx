import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";




const Dashboard = () => {
    return (
        <div className="grid navbar-start gap-6  w-10 md:w-60 p-4 pt-8 pb-28 border-r-4 border-t-2">

            <button className="btn uppercase"><NavLink>ORganizer profile</NavLink></button>
            <button className="btn uppercase"><NavLink to='/addcamp'>add a camp</NavLink> </button>
            <button className="btn uppercase"><NavLink to='/managecamp'>manage camp</NavLink> </button>
            <button className="btn uppercase"><NavLink to='/request'>manage request camp</NavLink> </button>
            <button className="btn uppercase   btn-outline rounded-2xl"><NavLink to="/">
                <div className="flex ">
                    {
                        <FaHome></FaHome>
                    }
              
                <div className="ml-3">
                    Home
                </div>
                </div>
            </NavLink> </button>

        </div>
    );
};

export default Dashboard;