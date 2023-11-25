import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthConnect } from "../../Authinction/Authinction";
import swal from "sweetalert";
import img from './../../../../assets/Images/icon user.jpg'
import AvailableCamp from "./AvailableCamp/AvailableCamp";


const Navbar = () => {
    const { user, logout } = useContext(AuthConnect)
    const hendelsignout = () => {
        logout()
            .then(result => {
                console.log(result.user);


            })
            .catch(error => {
                console.error(error)
                swal("Success!", "successfully Logout", "success");
            })
    }
    const Navlink = <>
        <li className="text-lg font-semibold font-serif hover:text-cyan-400"> <NavLink to="/">Home</NavLink></li>
      <div className="text-lg font-serif hover:text-cyan-400"><AvailableCamp></AvailableCamp></div> 
        <li className="text-lg font-semibold  hover:text-cyan-400"> <NavLink to="/dashboard">DashBoard</NavLink></li>
        <li className="text-lg font-semibold   hover:text-cyan-400"> <NavLink to="/contact">Contact Us</NavLink></li>
        {
            user ? <>
                <div className="flex gap-2">
                     
                        {/* <p className="mr-2 font-bold">{user?.displayName}</p> */}

                        <div className="flex items-center ml-60 mr-10">
                            <img className="h-10 w-10 mr-2 rounded-full" src={user?.photoURL} alt="" />
                            <Link className="btn btn-outline btn-secondary" to='/signup'> <button onClick={hendelsignout}>Signout</button></Link>
                        </div>
 
                </div>
            </>
                :
                <>
                    <div className="flex">
                        <li className="text-lg font-semibold font-serif hover:text-cyan-400"> <NavLink to="/login">Login</NavLink></li>

                        <div className="flex items-center ml-60 mr-10">
                            <img className="h-10 w-10 mr-2 rounded-full" src={img} alt="" />
                            <Link className="btn " to='/signup'>Register</Link>
                        </div>





                    </div>
                </>


        }



    </>
    return (
        <div className="mt-2">
            <div>
                <hr />
                <hr />
            </div>
            <div className="navbar items-center bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                Navlink
                            }
                        </ul>
                    </div>
                    <a className="  btn-ghost text-3xl"><span className="text-5xl font-serif text-red-400">H</span>ealh<span className="text-4xl font-serif text-emerald-300">A</span>ven Camps</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Navlink
                        }
                    </ul>
                </div>

            </div>
            <div>
                {/* <p className="bg-amber-50">.</p> */}
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
            </div>
        </div>
    );
};

export default Navbar;