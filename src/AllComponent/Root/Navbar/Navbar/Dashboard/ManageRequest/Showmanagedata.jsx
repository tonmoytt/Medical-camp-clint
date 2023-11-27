import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Showmanagedata = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { name, _id, age, gender, address } = data;


    const hendeladd=() =>{
        fetch('')
    }
    return (
        <div>
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

                            <Link><button className="mr-4 btn btn-outline btn-error ">Delete</button></Link>
                            </div>
                            
                        </tr>
                         
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Showmanagedata;