import { useContext, useState } from "react";
import { AuthConnect } from "../Authinction";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const SignUp = () => {
    const [password, setpassword] = useState('')
    const { CreateUser, createGoogle, Updateuser } = useContext(AuthConnect)

    const Navigate = useNavigate()
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

                // send user information to database//
                fetch('https://medical-camp-server-mu.vercel.app/signup', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })



                Updateuser(name, photo)
                    .then(result => {
                        console.log(result.user);

                    })
                    .catch(error => {
                        console.error(error);

                    })
                swal("Success!", "Registered Successfully", "success");
                event.target.reset()
                Navigate('/login')

            })
            .catch(error => {
                console.error(error);
                swal("error!", "check, and try again!", "error");
            })
    }




    const GoogleHendel = () => {
        console.log('clicked');
        createGoogle()
            .then(result => {
                console.log(result.user);
                swal("Success!", "Google Registertion Successfully", "success");
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/k3cvkYj/signbggggggg.jpg)' }}>
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-left text-neutral-content">


                <div className="hero min-h-screen  rounded-2xl">
                    <div className="hero-content flex-col  ">
                        <div className="text-center px-28 ">
                            <h1 className="text-3xl font-bold">Register now!</h1>
                           
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-black">
                            <form onSubmit={HendelSignUp} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-indigo-600">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-indigo-600">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-indigo-600">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-indigo-600">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6 text-indigo-600">
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
            </div>
        </div>
    );
};

export default SignUp;




