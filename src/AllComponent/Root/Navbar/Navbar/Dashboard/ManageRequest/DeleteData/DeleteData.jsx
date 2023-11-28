import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

 

const DeleteData = () => {
    const [data, setdata] = useState([])
    const { id } = useParams()
    console.log(id);
    const loder = useLoaderData()
    console.log(loder);
    return (
        <div>
            <p>pasi</p>
        </div>
    );
};

export default DeleteData;