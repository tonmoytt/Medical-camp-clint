import { useState } from "react";
import AvailableCamp from "../../../AvailableCamp/AvailableCamp";
import { useEffect } from "react";
import Footer from "../../../../../Home/Footer/Footer";
import ShowFeedback from "./ShowFeedback";
import Dashboard from "../../Dashboard";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";



const FeedBack = () => {
    const [post, setpost] = useState()
    useEffect(() => {
        fetch('https://medical-camp-server-mu.vercel.app/post')
            .then(res => res.json())
            .then(data => {
                setpost(data);

            })
    }, [])
    return (
        <div className="">

            <div className="pt-2 rounded-lg">
                <Link to='/profile'>
                    <div className="flex items-center">
                        {
                            <FaBackward></FaBackward>
                        }

                        <div className=" text-lg ml-2 text-red-500">
                            Back to DashBoard
                        </div>
                    </div>

                </Link>
                <p className="uppercase text-3xl text-blue-500  pt-4 mx-10 font-semibold mb-10 mt-6 text-center underline">OUr camp Services</p>

            </div>
            <div className="grid grid-cols-3 mx-4 my-4 gap-6 rounded-2xl bg-slate-400 p-10">
                {
                    post?.map(data => <ShowFeedback key={data._id} data={data}></ShowFeedback>)
                }
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default FeedBack;