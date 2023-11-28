import { Link, Navigate } from "react-router-dom";
import swal from "sweetalert";

// eslint-disable-next-line react/prop-types
const Showmanagedata = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { name, _id, age, gender, address } = data;


    const hendeladd = () => {
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("Success!", "  Successfully added", "success");
            })
    }


    //  deleted//

    const handleDeleteClick = (id) => {
        console.log(id);
        const procesd = confirm('are you sure?')
        if (procesd)
            console.log('yes ok');
        fetch(`http://localhost:5000/add/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(datas => {
                console.log(datas);
                if (datas.deletedCount > 0) {
                    alert('deleted succfull')

                    // deleted hoy na kno?
                    // const remining = data.filter(datas => datas._id !== id)
                    // setdataloder(remining);
                }
            })
    }
    return (
        <div className="bg-">
            <div className="overflow-x-auto">
                <table className="table border-8">
                    {/* head */}
                    <thead>
                        <tr className="font-mono bg-white text-xl font-bold">
                            <th></th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th></th>
                            <td> {name}</td>
                            <td> {age}</td>
                            <td> {address}</td>
                            <td> {gender}</td>

                            <div className="pl-4 justify-between flex">

                                <Link to={`/addeddeshboard/${_id}`}><button onClick={hendeladd} className="mr-4 btn btn-outline btn-success ">Add</button></Link>

                                <Link  ><button onClick={() => handleDeleteClick(_id)} className="mr-4 btn btn-outline btn-error ">Delete</button></Link>
                            </div>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Showmanagedata;