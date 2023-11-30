import { Link, useNavigate } from "react-router-dom";
 



// eslint-disable-next-line react/prop-types
const ShowFeedback = ({ data }) => {

    // eslint-disable-next-line react/prop-types
    const { _id, name, photo, fees, location, date } = data;
    const Navigate = useNavigate()

    const hendelFeedback = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const rating = form.rating.value
        const details = form.details.value
        const user = { name, rating, details,createdAt: new Date() }
        console.log(user);

        fetch('https://medical-camp-server-mu.vercel.app/feedback', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('rating successfully submited')
                event.target.reset()
                Navigate('/profile')
            })
    }

    return (
        <div className="card w-96 p-4 bg-slate-800 shadow-xl">
            <figure>
                <img className="w-full h-52" src={photo} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {name}</h2>
                <p> Location: {location}</p>
                <p> Schedules Date: {date}</p>
                <p className="font-mono text-lg   font-semibold"> Camp Fees: ${fees}</p>
                <div className="card-actions justify-between mt-10">

                    <Link to={`/details/${_id}`}><button className="btn btn-primary uppercase"> details</button></Link>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>FeedBack</button>
                    <dialog id="my_modal_1" className="modal">
                        <form onSubmit={hendelFeedback}>
                            <div className="modal-box text-black">

                                <div className="gap-2 flex px-">
                                    <input className="input input-bordered " type="text" name="name" placeholder="Your name" id="" required/>
                                    <input className="input input-bordered" type="number" name="rating" placeholder="Rating" id="" required/>
                                </div>

                                <div className="mt-4">
                                    <textarea className="textarea textarea-bordered pr-10" name="details" required placeholder="Your opinion"></textarea>
                                </div>
                                <div className="mt-6">
                                    <button className="btn btn-ghost btn-outline"><input type="submit" value="Feedback" /></button>
                                </div>
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </form>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default ShowFeedback;