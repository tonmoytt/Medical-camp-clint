import swal from "sweetalert";
import Dashboard from "../Dashboard";


const AddCamp = () => {
    const hendeladdcamp = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const fees = form.fees.value
        const location = form.location.value
        const provider = form.provider.value
        const healthcare = form.healthcare.value
        const target = form.target.value
        const photo = form.photo.value
        const date = form.date.value
        const description = form.description.value
        const user = { name, fees, location, provider, healthcare, target, photo, date, description }
        console.log(user);
        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("Success!", "Camp created", "success");
            })
    }
    return (
        <div>
            <div className="fixed">
                <Dashboard></Dashboard>
            </div>

            <div>
                <p className="uppercase text-3xl font-semibold mb-10 mt-6 text-center underline">add a camp</p>

            </div>
            <div className=" ml-72 mr-6">
                <div className="gap-10">
                    <form onSubmit={hendeladdcamp} >
                        {/* section one */}
                        <div className="flex gap-4 mb-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Camp name</span>
                                </label>
                                <input type="type" name="name" placeholder="Camp name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Camp Fees</span>
                                </label>
                                <input type="type" name="fees" placeholder="Camp fees" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* second section */}
                        <div className="flex gap-4 mb-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Venue Location</span>
                                </label>
                                <input type="location" name="location" placeholder="Venue location" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Specialized services Provider</span>
                                </label>
                                <input type="type" name="provider" placeholder="Specialized services Provider" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* trird section */}
                        <div className="flex gap-4 mb-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Healthcare Professionals</span>
                                </label>
                                <input type="type" name="healthcare" placeholder="Healthcare Professionals" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Targeted Audience</span>
                                </label>
                                <input type="type" name="target" placeholder="Targeted Audience" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* fourth section */}
                        <div className="flex gap-4 mb-5">
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="photo" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Scheduled Date</span>
                                </label>
                                <input type="date" name="date" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        {/* fifth section */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">comperhensive Description</span>
                            </label>
                            <input type="type" name="description" placeholder="Add Description" className="input input-bordered pb-28 pt-4" required />
                        </div>
                        {/* sixth section */}
                        <div className="text-center pb-10">
                            <button >
                                <input className=" mt-10 px-40 text-center btn btn-outline btn-secondary" type="submit" value="Add To Camp" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCamp;