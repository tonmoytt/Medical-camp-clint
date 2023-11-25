import { useContext, useState } from "react";
import { AuthConnect } from "../Authinction";
import { Link } from "react-router-dom";
import swal from "sweetalert";


const SignUp = () => {
    const [password, setpassword] = useState('')
    const { CreateUser,createGoogle,Updateuser } = useContext(AuthConnect)
    const HendelSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const photo = form.photo.value
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const user = { photo, name, email, password }
        console.log(user);


        setpassword('')
        if (password.length < 6) {
            setpassword('password should be at least 6 character')
        }
        else if (!/[0-9]/.test(password)) {
            setpassword('Please adding Number character')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setpassword('Please adding at least 1 uppercase')
            return;

        }
        else if (!/(?=.*[!@#$%^&*])/.test(password)) {
            setpassword('Please adding at least one special character')
            return;
        }


        CreateUser(email, password)
            .then(result => {
                console.log(result.user);
                Updateuser(name,photo)
                .then(result =>{
                    console.log(result.user);
                    
                })
                .catch(error =>{
                    console.error(error);
                     
                })
                alert('sucessfully kam hose')
            })
            .catch(error => {
                console.error(error);
                alert('error kam hossce na')
            })
    }
    const GoogleHendel = () => {
        console.log('clicked');
        createGoogle()
        .then(result =>{
            console.log(result.user);
            alert('succes google')
        })
        .catch(error =>{
            console.error(error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200 mx-10">
            <div className="hero-content flex-col  ">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">   .</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={HendelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
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
                            <button className="btn btn-primary"> <input type="submit" value="Register" /></button>
                        </div>
                    </form>
                    <div className="text-center text-lg">
                        <p>Already have an account? <Link className="btn-outline btn-secondary" to='/login'>login</Link></p>
                    </div>

                    <div className="px-4 pb-4">
                        <button onClick={GoogleHendel} className="w-full btn btn-secondary mt-4 ">Login in with Google</button>
                    </div>
                    
                </div>
                <div className='bg-red-200 rounded-base'>
                    {
                        password && <p className='mt-4 px-4 py-2 font-semibold text-2xl '> {password}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default SignUp;