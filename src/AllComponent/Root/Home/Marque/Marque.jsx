import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="mb-20 bg-cyan-100">
        <div className="bg-slate-100 flex mx-2 md:mx-28 lg:mx-28 mt-6 pl-4 py-2 items-center">
           
            <Marquee pauseOnHover={true} speed={100}>
            Nature Nurturers Marque: Honoring Conservation Champions. Recognizing exceptional dedication to preserving our environment and inspiring global conservation efforts.
            </Marquee>
        </div>
    </div>
    );
};

export default Marque;