import { useContext } from "react";
import { AuthConnect } from "../Authinction";
import { NavLink } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthConnect)
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
   
    if (user) {
        return children
    }
    return <NavLink to='/login'></NavLink>
};
    export default PrivetRoute;