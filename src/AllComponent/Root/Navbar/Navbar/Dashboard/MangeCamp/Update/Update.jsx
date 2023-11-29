import { useLoaderData, useNavigate } from "react-router-dom";
import Dashboard from "../../Dashboard";
import swal from "sweetalert";



const Update = () => {
    const loderData = useLoaderData()
    console.log(loderData);
    const Navigate=useNavigate()
    // const { name, _id, phoneNumber,healthInfo,age,gender,address } = loderData;

    const handleUpdate = event => {
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


        fetch(`https://medical-camp-server-mu.vercel.app/join/${loderData._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal(" Update Successfully & add again update data")
                    Navigate('/request')
                    
                }
            }).catch(err => console.log(err))
    }



    return (

        <div className="text-black">

            <div className="fixed">
                <Dashboard></Dashboard>
            </div>
            <div>
                <p className="uppercase text-3xl text-white font-semibold mb-10 mt-6 text-center underline">Update From</p>
            </div>


            <div className="ml-72 mr-6 mx-10">
                <form onSubmit={handleUpdate} className="space-y-4">
                    <input
                        name="name"
                        className="border px-1 py-2 rounded w-full"
                        type="text"
                        placeholder="Name"
                        defaultValue={loderData?.name}
                        required
                    />
                    <input
                        name="phoneNumber"
                        className="border px-1 py-2 rounded w-full"
                        type="number"
                        placeholder="Phone Number"
                        defaultValue={loderData?.phoneNumber}
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            name="age"
                            className="border px-1 py-2 flex-1 rounded w-full"
                            type="number"
                            placeholder="Age"
                            defaultValue={loderData?.age}
                            required
                        />
                        <select
                            name="gender"
                            className="border px-1 py-2 flex-1 rounded w-full"
                            defaultValue={loderData?.gender}
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
                            defaultValue={loderData?.address}
                            required
                        />
                        <input
                            disabled
                            className="border px-1 py-2 rounded w-full"
                            type="text"
                            defaultValue={loderData?.fees}
                        />
                    </div>
                    <textarea
                        name="healthInfo"
                        placeholder="Write Here Your Health Related Information"
                        defaultValue={loderData?.healthInfo}
                        className="border px-1 py-2 rounded w-full"
                    ></textarea>

                    <div className="flex justify-between mt-7">

                        {/* <form method="dialog"> */}
                        <button className="w-full ">
                            <input className=" mt-10 w-full  text-center btn btn-outline btn-secondary" type="submit" value="Update & Submit" />
                        </button>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;