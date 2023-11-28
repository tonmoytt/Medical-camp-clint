import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import Showmanagedata from "./Showmanagedata";



const ManageRequest = () => {
    const [data, setdata] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/join')
            .then(res => res.json())
            .then(data => {
                setdata(data);
            })

    }, [])
    return (
        <div className="bg-slate-300">
            <div className="fixed">
                <Dashboard></Dashboard>
            </div>
            <div>
                <p className="uppercase text-3xl font-semibold mb-10 mt-6 text-center underline">Manage Camping</p>

            </div>

            <div className="ml-72 mr-6">
                {
                    data?.map(data => <Showmanagedata key={data._id} data={data}></Showmanagedata>)
                }
            </div>
        </div>
    );
};

export default ManageRequest;