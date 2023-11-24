import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthConnect } from "../../Authinction/Authinction";
import swal from "sweetalert";
import img from './../../../../assets/Images/icon user.jpg'


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
        <li> <NavLink to="/">Home</NavLink></li>
        <li> <NavLink to="/about">About Us</NavLink></li>
        {
            user ? <>
                <div className="flex gap-2">
                    <div className="grid gap-2 ml-96">
                        <p className="mr-2">{user?.displayName}</p>

                        <div className="flex items-center ">
                            <img className="h-10 w-10 mr-2 rounded-full" src={user?.photoURL} alt="" />
                            <Link className="" to='/signup'> <button onClick={hendelsignout}>Signout</button></Link>
                        </div>




                    </div>
                </div>
            </>
                :
                <>
                    <div className="flex">
                        <li> <NavLink to="/login">Login</NavLink></li>

                        <div className="flex items-center ml-96">
                            <img className="h-10 w-10 mr-2 rounded-full" src={img} alt="" />
                            <Link className="btn " to='/signup'>Register</Link>
                        </div>





                    </div>
                </>


        }



    </>
    return (
        <div>
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
                    <a className="btn btn-ghost text-xl">HealHaven Camps</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            Navlink
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;