import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Detials = () => {
    const [data, setdata] = useState([])
    const { id } = useParams()
    console.log(id);
    const loder = useLoaderData()
    console.log(loder);

    useEffect(() => {
        const findData = loder.find(data => data._id === id)
        setdata(findData);
    }, [loder,id])
    return (
        <div className="mt-20 pl-2 md:pl-96 mx-auto">
            <h1 className="text-4xl text-rose-400 pb-4 ml-12">Full Details Available Here</h1>
            <div className="w-96 ml-16 mb-10">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
            </div>
            <div className="card w-1/2 text-center bg-orange-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src= {data.photo} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {data.name}</h2>
                    <p>Specialist Provider : {data.provider}</p>
                    <p>HealthCare Professionals : {data.healthcare}</p>
                    <p>Target Audience : {data.target}</p>
                    <p>Date : {data.date}</p>
                    <p>Description : {data.description}</p>
                    <p className="text-lg font-mono">Price : ${data.fees}</p>
                    <div className="card-actions mt-6 w-full">
                        <button className="btn btn-primary uppercase w-full ">Add to card</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detials;