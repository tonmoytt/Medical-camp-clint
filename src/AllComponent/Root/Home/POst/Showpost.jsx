import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Showpost = ({ post }) => {
    // eslint-disable-next-line react/prop-types
    const { date,_id, description, healthcare, fees, name, photo, provider, target } = post
    return (
        <div className="card w-96 text-black  bg-sky-200 shadow-xl">
            <figure><img src= {photo} alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title"> { name}</h2>
                    <p>Specialist Provider : { provider}</p>
                    <p>HealthCare Professionals : { healthcare}</p>
                    <p>Target Audience : { target}</p>
                    <p>Date : { date}</p>
                    <p>Description : { description}</p>
                    <p className="text-lg font-mono">Price : ${fees}</p>
                <div className="card-actions justify-end">
                   <Link to={`/postdetails/${_id}`}><button className="btn btn-primary">Show details</button></Link> 
                </div>
            </div>
            
        </div>
    );
};

export default Showpost;