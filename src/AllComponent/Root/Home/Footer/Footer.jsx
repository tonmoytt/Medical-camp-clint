import { FaFacebook, FaTwitter, FaGoogle, FaPinterest, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-white text-slate-800 mt-10 md:px-16">
            <div className="justify-between border-b-4 grid md:grid-cols-1 py-20 items-center ">

                <div className="mt-4">
                    <a className="  btn-ghost text-3xl "><span className="text-5xl font-serif text-red-400">M</span>edi <span className="text-4xl font-serif text-emerald-300 ">C</span><span className="text-red-40">amp</span> <span className="text-3xl absolute right-top-2 text-blue-700 font-bold font-serif">+</span></a>
                </div>
                <div className="flex gap-6 pl-6 md:pl-1 navbar-end ">
                    <button> <p> Quality police</p></button>
                    <button><p> Customer Police</p></button>
                    <button>  <Link to='/aboutus'>About Us</Link>   </button>
                    <button> <Link to='/contact'> Contsct us</Link></button>

                    <button><p> Sitemap</p></button>



                </div>
            </div>
            <div className="flex justify-between py-10">
                <p>copyright@2023 <span className="text-xl font-bold">Akira</span>. All rights reserved </p>
                <div className='flex gap-4'>
                    {
                        <FaFacebook></FaFacebook>

                    }
                    {
                        <FaTwitter></FaTwitter>
                    }
                    {
                        <FaGoogle></FaGoogle>
                    }
                    {
                        <FaPinterest></FaPinterest>
                    }
                    {
                        <FaInstagram></FaInstagram>
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;