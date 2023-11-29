import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "../Dashboard";
import { Link } from "react-router-dom";
// import swal from "sweetalert";


const MangeCamp = () => {

    const [data, setdata] = useState()
    useEffect(() => {
        fetch('https://medical-camp-server-mu.vercel.app/add')
            .then(res => res.json())
            .then(data => {
                setdata(data);
                // console.log(data);
            })

    }, [])

    // const handleDeleteClick = (id) => {
    //     console.log(id);
    //     const procesd = confirm('are you sure?')
    //     if (procesd)
    //         console.log('yes ok');
    //     fetch(`https://medical-camp-server-mu.vercel.app/add/${id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(datas => {
    //             console.log(datas);
    //             if (datas.deletedCount > 0) {
    //                 swal("Success!", "  Delete Successful  ", "success");

                     
    //             }
    //         })
    // }


    return (
        <div className="bg-red-300">
            <p className="uppercase text-3xl font-semibold mb-10 mt-6 text-center underline">Your Camping</p>
            <div className="bg-slate-400 flex">
                <div className="">
                    <Dashboard></Dashboard>
                </div>


                <div className=" mr-6">
                    {
                        data?.map(data => <div key={data._id}>

                            <div className="overflow-x-auto bg-purple-200">
                                <table className="table border-8 mt-8 text-red-400 bg-slate-700 ">
                                    {/* head */}
                                    <thead>
                                        <tr className="font-mono  bg-white text-xl font-bold">
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>Address</th>
                                            <th>Gender</th>
                                            <th>HealthInfo</th>
                                            <th>Number </th>
                                            <th> </th>
                                            <th> </th>
                                            <th> </th>
                                            <th> </th>
                                            <th> </th>
                                            <th> </th>
                                             
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <td> {data.name}</td>
                                            <td> {data.age}</td>
                                            <td> {data.address}</td>
                                            <td> {data.gender}</td>
                                            <td> {data.healthInfo}</td>
                                            <td> {data.phoneNumber}</td>


                                            <div className="pl-4 justify-between flex">

                                                <Link to={`/update/${data._id}`}>
                                                    <button className="mr-4 btn btn-outline btn-success ">Update</button>
                                                </Link>

                                                <Link  >
                                                    <button className="mr-4 btn btn-outline btn-error ">Payment</button>
                                                </Link>
                                            </div>
                                        </tr>


                                    </tbody>

                                </table>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MangeCamp;