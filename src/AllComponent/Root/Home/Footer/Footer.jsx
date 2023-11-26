import { FaFacebook,FaTwitter,FaGoogle,FaPinterest,FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-slate-100 mt-10 px-16">
            <div className="justify-between border-b-4 flex py-20 items-center ">

                <div className="mt-4">
                    <p  className="text-2xl"> <span className="text-4xl text-red-500 font-serif">A</span>nivio</p>
                </div>
                <div className="flex gap-6  navbar-end ">
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