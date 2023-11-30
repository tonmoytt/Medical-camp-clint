import { Link } from "react-router-dom";

 

const Error = () => {
    return (
        <div>
            <div className="align-middle mt-20 md:mt-40 lg:mt-60">
                <p className="text-violet-500 font-extrabold mb-2 text-6xl text-center ">Oops!</p>
                <h1 className="text-3xl text-center font-semibold ">4O4 - page not found </h1>
                <div className="text-center mt-6">
                    <Link to="/">
                        <button className="btn btn-secondary">Go to Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;