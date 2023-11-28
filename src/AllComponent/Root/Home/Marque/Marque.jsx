import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="mb-10 bg-indigo-400">
            <div className="bg-slate-100 flex text-slate-800 mx-2 md:mx-28 lg:mx-28 mt-6 pl-4 py-2 items-center">

                <Marquee pauseOnHover={true} speed={100}>
                    "Join us at HealthHorizon's Medical Camp, where expert healthcare professionals offer free check-ups, consultations, and health education. Your well-being matters! A day dedicated to your health and happiness."
                </Marquee>
            </div>
        </div>
    );
};

export default Marque;