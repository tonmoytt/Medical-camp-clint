import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "../Dashboard";


const MangeCamp = () => {

    const [data, setdata] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/add')
            .then(res => res.json())
            .then(data => {
                setdata(data);
                console.log(data);
            })

    }, [])
    return (
        <div>
            <div className="fixed">
                <Dashboard></Dashboard>
            </div>

            <p className="uppercase text-3xl font-semibold mb-10 mt-6 text-center underline">Your Camping</p>
            <div className="ml-72 mr-6">
                {
                    data?.map(data => <div key={data._id}>

                        <div className="overflow-x-auto">
                            <table className="table border-8">
                                {/* head */}
                                <thead>
                                    <tr className="font-mono text-xl font-bold">
                                        <th></th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Address</th>
                                        <th>Gender</th>
                                        <th>HealthInfo</th>
                                        <th>Number </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th></th>
                                        <td> {data.name}</td>
                                        <td> {data.age}</td>
                                        <td> {data.address}</td>
                                        <td> {data.gender}</td>
                                        <td> {data.healthInfo}</td>
                                        <td> {data.phoneNumber}</td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MangeCamp;