import Dashboard from "../../Dashboard";
import { useEffect } from 'react';
import { useState } from 'react';
import swal from 'sweetalert';



const Users = () => {

    const [singupUsers, setSignUpUsers] = useState()
    useEffect(() => {
        fetch('https://medical-camp-server-mu.vercel.app/signup')
            .then(res => res.json())
            .then(user => setSignUpUsers(user))
    }, [])



    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://medical-camp-server-mu.vercel.app/signup/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas);
                if (datas.deletedCount > 0) {
                    swal("Delete Successful!", " Reload this page   ", "success");


                }
            })

    }

    return (
        <div  className="flex bg-slate-400">
            <div className="bg-gray-400  ">
                <Dashboard></Dashboard>
            </div>


            <div className='bg-amber-200   mb-5 '>



                <p className='text-3xl text-emerald-500 py-4 text-end mr-4'>Users Profile here</p>

                <div className=" mr-6">
                    {
                        singupUsers?.map(singupUsers => <div key={singupUsers._id}>

                            <div className="overflow-x-auto bg-purple-200">
                                <table className="table border-8 mt-8 text-red-400 bg-slate-700 ">
                                    {/* head */}
                                    <thead>
                                        <tr className="font-mono  bg-white text-xl font-bold">

                                            <th></th>
                                            <th></th>
                                            <th></th>
                                            <th>Profile Photo</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
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
                                            <th><img className='w-20 h-20 rounded-full' src={singupUsers.photo} alt="" /></th>
                                            <td> {singupUsers.name}</td>
                                            <td> {singupUsers.email}</td>
                                            <td> {singupUsers.password}</td>

                                            <div className='mt-6 pl-16'>

                                                <button onClick={() => handleDelete(singupUsers._id)} className="mr-4 btn btn-outline btn-error ">Delete</button>

                                            </div>
                                        </tr>


                                    </tbody>

                                </table >
                            </div >
                        </div >)
                    }
                </div >

            </div >
        </div>
    );
};

export default Users;