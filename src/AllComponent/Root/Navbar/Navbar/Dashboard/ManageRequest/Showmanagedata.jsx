 
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import useAxiosPublic from "../../../../../../Hooks/usehaxiospublick";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Showmanagedata = ({ data,refetch, }) => {
    // eslint-disable-next-line react/prop-types
    const { name, _id, age, gender, address } = data;
    const axiosPublic = useAxiosPublic()
    const Navigate = useNavigate();
    

    const hendeladd = () => {
        fetch('https://medical-camp-server-mu.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {

                if(data._id === _id){
                    return alert('alreday added, first delete old data then added update data')
                }
                console.log(data);
                swal("Success!", "  Successfully added", "success");
                Navigate('/managecamp')
            })
    }


    //  deleted//
    const handleDelete =  (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "Are You sure to delete this subscriber ?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "red",
          confirmButtonText: "Yes !",
        }).then(async(result) => {
          if (result.isConfirmed) {
            const res = await axiosPublic.delete(`/join/${id}`);
            if (res.data.deletedCount > 0) {
                Swal.fire({title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
        }
        refetch();
      }
    });
   
  };
    // const handleDeleteClick = (id) => {
    //     console.log(id);
    //     const procesd = confirm('are you sure?')
    //     if (procesd)
    //         console.log('yes ok');
    //     fetch(`https://medical-camp-server-mu.vercel.app/join/${id}`, {
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
        <div className="bg-red-200">
            <div className="overflow-x-auto">
                <table className="table border-8">
                    {/* head */}
                    <thead>
                        <tr className="font-mono bg-white text-xl font-bold">
                            <th></th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th> </th>
                            <th> </th>
                            <th> </th>
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
                            <td> {name}</td>
                            <td> {age}</td>
                            <td> {address}</td>
                            <td> {gender}</td>

                            <div className="pl-4 justify-between flex">

                                <Link to={`/addeddeshboard/${_id}`}><button onClick={hendeladd} className="mr-4 btn btn-outline btn-success ">Add</button></Link>

                                <Link  ><button onClick={() =>  handleDelete(_id)} className="mr-4 btn btn-outline btn-error ">Delete</button></Link>
                            </div>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Showmanagedata;