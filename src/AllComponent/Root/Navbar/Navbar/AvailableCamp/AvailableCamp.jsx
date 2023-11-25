import { Link } from "react-router-dom";

 

const AvailableCamp = () => {
    return (
        <div>
             <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                 
                <li>
                    <details>
                        <summary className="text-lg font-semibold ">
                        Available Camp
                        </summary>
                        <ul className="p-2 bg-base-100">
                           <Link to='/participant'><li><a> Participant</a></li></Link> 
                            <li><a>HealthCare Professionals</a></li>
                            <li><a> Organizer</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
        </div>
    );
};

export default AvailableCamp;