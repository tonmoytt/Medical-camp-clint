import { useContext } from "react";
import { AuthConnect } from "../Authinction";
import {  Navigate, useLocation } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthConnect)
    const location =useLocation()
    if (loading) {
        return <progress className="progress-secondary w-full mt-6"></progress>
    }
   
    if (user) {
        return children
    }
    return <Navigate to='/login'  state={{from : location}} replace></Navigate>
};
    export default PrivetRoute;