import { useEffect, useState } from "react";
import { FaBackward } from "react-icons/fa";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";


// (data.modifiedCount>0)
// (data.deletedCount === 1)
const Detials = () => {
    const Navigate=useNavigate()
    const [data, setdata] = useState([])
    const { id } = useParams()
    console.log(id);
    const loder = useLoaderData()
    console.log(loder);

    useEffect(() => {
        const findData = loder?.find(data => data._id === id)
        setdata(findData);

    }, [loder, id])



    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const phoneNumber = form.phoneNumber.value
        const age = form.age.value
        const gender = form.gender.value
        const address = form.address.value
        const healthInfo = form.healthInfo.value
        const user = { name, phoneNumber, age, gender, address, healthInfo }
        console.log(user);

        fetch('https://medical-camp-server-mu.vercel.app/join', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                 alert('Submit successfull')
                 event.target.reset()
                Navigate('/camp')


            })
    }

    return (
        <div className="mt-20 pl-2 md:pl-96 mx-auto text-black">
            <h1 className="text-4xl text-rose-400 pb-4 ml-4">Full Details Available Here</h1>
            <div className="w-64 md:w-96 ml-6 mb-10">
                <hr />
                <hr />
                <hr />
                <hr />
                <hr />
            </div>
            <div className="card w-full md:w-1/2 text-center bg-orange-100 shadow-xl">
                <figure className="px-4 md:px-10 pt-10">
                    <img src={data.photo} alt="Shoes" className="rounded-xl w-full" />
                </figure>
                <button className="absolute right-4 mt-2">
                    <Link to='/camp'>
                        <div className="flex items-center">
                            {
                                <FaBackward></FaBackward>
                            }

                            <div className=" text-lg ml-2 text-red-500">
                                Back
                            </div>
                        </div>

                    </Link>



                </button>
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> {data.name}</h2>
                    <p>Specialist Provider : {data.provider}</p>
                    <p>HealthCare Professionals : {data.healthcare}</p>
                    <p>Target Audience : {data.target}</p>
                    <p>Date : {data.date}</p>
                    <p>Description : {data.description}</p>
                    <p className="text-lg font-mono">Price : ${data.fees}</p>
                    {/* <div className="card-actions mt-6 w-full">
                        <button onClick={'my_modal_5'} className="btn btn-primary uppercase w-full ">Join</button>
                    </div> */}


                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary uppercase w-full " onClick={() => document.getElementById('my_modal_1').showModal()}>Join</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box text-black">
                            <h3 className="font-bold mb-3 text-lg">Fill Up The Join Camp Form!</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input
                                    name="name"
                                    className="border px-1 py-2 rounded w-full"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                                <input
                                    name="phoneNumber"
                                    className="border px-1 py-2 rounded w-full"
                                    type="number"
                                    placeholder="Phone Number"
                                    required
                                />
                                <div className="flex gap-4">
                                    <input
                                        name="age"
                                        className="border px-1 py-2 flex-1 rounded w-full"
                                        type="number"
                                        placeholder="Age"
                                        required
                                    />
                                    <select
                                        name="gender"
                                        className="border px-1 py-2 flex-1 rounded w-full"
                                        required
                                    >
                                        <option disabled>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Custom</option>
                                    </select>
                                </div>
                                <div className="flex gap-4">
                                    <input
                                        name="address"
                                        className="border px-1 py-2 rounded w-full"
                                        type="text"
                                        placeholder="Address"
                                        required
                                    />
                                    <input
                                        disabled
                                        className="border px-1 py-2 rounded w-full"
                                        type="text"
                                        defaultValue={data.fees}
                                    />
                                </div>
                                <textarea
                                    name="healthInfo"
                                    placeholder="Write Here Your Health Related Information"
                                    className="border px-1 py-2 rounded w-full"
                                ></textarea>

                                <div className="flex justify-between mt-7">

                                    {/* <form method="dialog"> */}
                                    <button className="w-full ">
                                        <input className=" mt-10 w-full  text-center btn btn-outline btn-secondary" type="submit" value="Submit" />
                                    </button>
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>

                                </div>
                            </form>

                        </div>
                    </dialog>

                </div>
            </div>
        </div>
    );
};

export default Detials;


