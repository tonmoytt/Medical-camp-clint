import { useEffect, useState } from "react";
import Showcamp from "./Showcamp";
import swal from "sweetalert";



const AvailableCamp = () => {
    const [post, setpost] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then(res => res.json())
            .then(data => {
                setpost(data);
                // console.log(data);
                // swal("Post create", " successful", "success");
            })
    }, [])
    return (
        <div className="bg-fuchsia-200">
            <div className="pt-2 rounded-lg">
                <p className="uppercase text-3xl text-blue-500  pt-4 mx-10 font-semibold mb-10 mt-6 text-center underline">All Camp Here</p>

            </div>
            <div className="grid grid-cols-3 mx-4 my-4 gap-6 rounded-2xl bg-slate-400 p-10">
                {
                    post?.map(data => <Showcamp key={data._id} data={data}></Showcamp>)
                }
            </div>
        </div>
    );
};

export default AvailableCamp;