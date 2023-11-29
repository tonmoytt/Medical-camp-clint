import { Link } from 'react-router-dom';
import img from './../../../../assets/Images/logo.png' 
import { FaFacebook,FaTwitter,FaGoogle,FaPinterest,FaInstagram } from "react-icons/fa";


const Header = () => {
    return (
        <div className="bg-violet-200 p-4 items-start grid md:grid-cols-3  ">
       <div>
        <img className='h-20 w-20   text-center rounded-full' src= {img} alt="" />
        </div>  
                <div className='   '>
                <h1 className="text-center py-2 text-xl text-black font-serif">Take one option,make life esey <span><button className="text-xl rounded-xl bg-red-400 p-2 text-white ml-2">Learn more</button></span></h1>
                </div>
                <div className='flex gap-4 mt-5 text-slate-800  md:ml-20 items-center '>
                    <div className='flex gap-4 md:pl-8'>
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
                    <div className='border-x-4 '>
                    <Link className=' hover:btn btn-outline md:px-2 uppercase md:font-serif' to="/contact"> Contact Us</Link>
                    </div>
                    
                </div>
             
        </div>
    );
};

export default Header;