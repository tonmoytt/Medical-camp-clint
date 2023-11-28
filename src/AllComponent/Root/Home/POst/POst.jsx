import { useEffect, useState } from "react";

 

const POst = () => {
    const [post,setPost]=useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/post')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])


    return (
        <div>
            <p>this is post section</p>
        </div>
    );
};

export default POst;