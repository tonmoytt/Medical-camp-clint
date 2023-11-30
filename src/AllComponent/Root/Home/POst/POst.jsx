import { useEffect, useState } from "react";
import Showpost from "./Showpost";
import { Link } from "react-router-dom";

 

const POst = () => {
    const [post,setPost]=useState([])

    useEffect(() =>{
        fetch('https://medical-camp-server-mu.vercel.app/post')
        .then(res => res.json())
        .then(data =>  {
            const Postdata =data.slice(0,6)
            setPost(Postdata)
        })
        
        // const sortedBlogs = post.sort((a, b) => new Date(b?.createdAt) - new Date(a?.createdAt));
        // setPost(sortedBlogs);
    },[])


    return (
        <div className="my-10 bg-indigo-400">
            <p className=" text-start text-violet-700 px-4 font-bold text-3xl py-4 mb-10 bg-slate-200">Popular Medi camp </p>
            <div className="grid md:grid-cols-3 p-3 bg-slate-700 text-black gap-4 mx-4 ">
                {
                    post.map(post => <Showpost key={post._id} post={post}></Showpost> )
                }
            </div>
            <div className="navbar-end navbar ">
              <Link to='/camp'><button className="btn   btn-error">See All</button></Link>  
            </div>
            <div className="bg-red-300 my-20">
                <p>.</p>
            </div>
        </div>
    );
};

export default POst;