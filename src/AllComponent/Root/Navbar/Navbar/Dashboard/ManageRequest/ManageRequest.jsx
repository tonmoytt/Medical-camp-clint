import { useEffect, useState } from "react";
import Dashboard from "../Dashboard";
import Showmanagedata from "./Showmanagedata";
import useAxiosPublic from "../../../../../../Hooks/usehaxiospublick";
import { useQuery } from "@tanstack/react-query";



const ManageRequest = () => {
    // const [data, setdata] = useState()
    // useEffect(() => {
    //     fetch('https://medical-camp-server-mu.vercel.app/join')
    //         .then(res => res.json())
    //         .then(data => {
    //             setdata(data);
    //         })

    // }, [])
    const axiosPublic = useAxiosPublic()
    const { data: joins = [],refetch} = useQuery({
        queryKey: ["join"],
        queryFn: async () => {
            const res = await axiosPublic.get("/join");
            return res.data;
        },
    });
    console.log(joins);

    return (
        <div className="bg-blue-300 mt-3">
            <p className="uppercase text-3xl  font-semibold mb-10 mt-6 text-center underline">Manage Camping</p>
            <div className="bg-slate-400 flex">
                <div className="">
                    <Dashboard></Dashboard>
                </div>


                <div className=" mr-6">

                    {
                        joins?.map(data => <Showmanagedata key={data._id} data={data} refetch={refetch}></Showmanagedata>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageRequest;