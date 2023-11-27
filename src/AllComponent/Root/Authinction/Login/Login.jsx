import { useContext } from "react";
import { AuthConnect } from "../Authinction";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const Login = () => {
    const { login, } = useContext(AuthConnect)

    const location = useLocation()
    console.log(location);

    const Navigate = useNavigate()
    const from = location.state?.from?.pathname || "/"

    const HendelLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        const user = { email, password }
        console.log(user);
        login(email, password)
            .then(result => {
                console.log(result.user);
                swal("Success!", "Successfully login", "success");
                event.target.reset()
                Navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                swal("error!", "check, and try again!", "error");
            })
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">   .</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={HendelLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary"> <input type="submit" value="Login" /></button>
                        </div>
                    </form>
                    <div className="text-center py-4">
                        <p className="text-lg">Do not have an account? <Link className="btn-outline btn-secondary" to='/signup'>Register</Link></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;