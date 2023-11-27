import {  NavLink } from "react-router-dom";
 

 

const Dashboard = () => {
    return (
        <div className="grid navbar-start gap-6 fixed w-60 p-4 pt-8 pb-28 border-r-4">
            
            <button className="btn uppercase"><NavLink>ORganizer profile</NavLink></button>
            <button className="btn uppercase"><NavLink to='/addcamp'>add a camp</NavLink> </button>
            <button className="btn uppercase"><NavLink>manage camp</NavLink> </button>
            <button className="btn uppercase"><NavLink>manage request camp</NavLink> </button>
            <button className="btn uppercase  btn-outline rounded-2xl"><NavLink>Home</NavLink> </button>
            
        </div>
    );
};

export default Dashboard;