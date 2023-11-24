import { Outlet } from "react-router-dom";
import Header from "./Home/Header/Header";
import Navbar from "./Navbar/Navbar/Navbar";



const Root = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;