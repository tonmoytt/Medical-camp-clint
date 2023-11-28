import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const Showcamp = ({data}) => {
    // eslint-disable-next-line react/prop-types
    const { _id, name, photo, fees, location, date } = data;
    return (
        <div className="card w-96 p-4 bg-fuchsia-200 shadow-xl">
            <figure>
                <img src={photo} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p> Location: {location}</p>
                <p> Schedules Date: {date}</p>
                <p className="font-mono text-lg   font-semibold"> Camp Fees: ${fees}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`}><button className="btn btn-primary uppercase">See details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Showcamp;