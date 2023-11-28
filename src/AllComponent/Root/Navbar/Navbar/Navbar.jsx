import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthConnect } from "../../Authinction/Authinction";
import swal from "sweetalert";
import img from './../../../../assets/Images/icon user.jpg'
import { FaHome } from "react-icons/fa";


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
        <li className="text-lg font-semibold font-serif hover:text-cyan-400"> <NavLink to="/">
            {
                <FaHome></FaHome>
            }
            Home</NavLink></li>
        <li className="text-lg font-semibold  hover:text-cyan-400"> <NavLink to="/camp">Available Camp</NavLink></li>
     
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
            <div className="navbar items-center text-white bg-slate-800">
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
                    <a className="  btn-ghost text-3xl ml-4"><span className="text-5xl font-serif text-red-400">M</span>edi <span className="text-4xl font-serif text-emerald-300 ">C</span><span className="text-red-40">amp</span> <span className="text-3xl absolute right-top-2 text-blue-700 font-bold font-serif">+</span></a>
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