import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Showcamp from "./Showcamp";

 

const AvailableCamp = () => {
    const [post,setpost]=useState()
    useEffect(() =>{
        fetch('http://localhost:5000/post')
        .then(res => res.json())
        .then(data =>{
            setpost(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <div className="grid grid-cols-3">
                {
                    post?.map(data => <Showcamp key={data._id} data={data}></Showcamp> )
                }
            </div>
        </div>
    );
};

export default AvailableCamp;