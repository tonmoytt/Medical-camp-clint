import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthConnect } from "../../Authinction/Authinction";
import img from './../../../../assets/Images/icon user.jpg'
import { FaHome } from "react-icons/fa";
import Swal from "sweetalert2";


const Navbar = () => {
    const { user, logout } = useContext(AuthConnect)
    const Navigate = useNavigate()
    const hendelsignout = () => {



        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // logout set
                logout()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                // navigate home
                Navigate('/')
            }
        });



    }
    const Navlink = <>
        <li className="text-base font-semibold font-serif hover:text-cyan-400"> <NavLink to="/">
            {
                <FaHome></FaHome>
            }
            Home</NavLink></li>
        <li className="text-base font-semibold  hover:text-cyan-400"> <NavLink to="/camp">Available Camp</NavLink></li>

        <li className="text-l font-semibold  hover:text-cyan-400"> <NavLink to="/dashboard">DashBoard</NavLink></li>
        <li className="text-base font-semibold   hover:text-cyan-400"> <NavLink to="/contact">Contact Us</NavLink></li>
        {
            user ? <>
                <div className="flex gap-2">

                    {/* <p className="mr-2 font-bold">{user?.displayName}</p> */}

                    <div className="flex items-center ml-40 mr-10">
                        <img className="h-10 w-10 mr-2 rounded-full" src={user?.photoURL} alt="" />
                        <Link className="btn btn-outline btn-secondary" to='/signup'> <button onClick={hendelsignout}>Signout</button></Link>
                    </div>

                </div>
            </>
                :
                <>
                    <div className="flex">
                        <li className="text-base font-semibold font-serif hover:text-cyan-400"> <NavLink to="/login">Login</NavLink></li>

                        <div className="flex items-center ml-60 mr-10">
                            <img className="h-10 w-10 mr-2 rounded-full" src={img} alt="" />
                            <Link className="btn " to='/signup'>Register</Link>
                        </div>





                    </div>
                </>


        }



    </>
    return (
        <div className="mb-2">
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
                        <ul tabIndex={0} className="menu md:ml-32 menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-black rounded-box w-52">
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