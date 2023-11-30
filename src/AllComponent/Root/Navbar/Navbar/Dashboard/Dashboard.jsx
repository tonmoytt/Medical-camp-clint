import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";




const Dashboard = () => {
    return (


        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/z6CqVtH/download.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="  ">
                <h1 className="text-4xl my-4 even: font-semibold text-center bg">Manage your Deshboard  </h1>
                <div className="grid navbar-start   gap-6 bg-slate-500 w-10 md:w-60 p-4 pt-8 md:pb-28 border-r-4 border-t-2">




                    <li className="btn uppercase"><NavLink to='/profile'>ORganizer profile</NavLink></li>
                    <li className="btn uppercase"><NavLink to='/addcamp'>add a camp</NavLink> </li>
                    <li className="btn uppercase"><NavLink to='/managecamp'>manage camp</NavLink> </li>
                    <li className="btn uppercase"><NavLink to='/request'>manage request camp</NavLink> </li>
                    <li className="btn uppercase btn-outline rounded-2xl"><NavLink to="/">
                        <div className="flex ">
                            {
                                <FaHome></FaHome>
                            }

                            <div className="ml-3">
                                Home
                            </div>
                        </div>
                    </NavLink> </li>
                </div>
            </div>
        </div>
    );

};

export default Dashboard;