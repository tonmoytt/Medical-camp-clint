import { Link } from 'react-router-dom';
import img from './../../../../assets/Images/logo.png' 
import { FaFacebook,FaTwitter,FaGoogle,FaPinterest,FaInstagram } from "react-icons/fa";


const Header = () => {
    return (
        <div className="bg-red-300 p-4 items-center flex justify-between">
       <div>
        <img className='h-20 w-20 rounded-full' src= {img} alt="" />
        </div>  
                <div>
                <h1 className="text-center py-2 text-xl text-white font-serif">Take one option,make life esey <span><button className="text-xl rounded-xl bg-red-400 p-2">Learn more</button></span></h1>
                </div>
                <div className='flex gap-4 items-center'>
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
                    <div className='border-x-2'>
                    <Link className=' hover:btn btn-outline px-2 uppercase font-serif' to="/contact"> Contact Us</Link>
                    </div>
                    
                </div>
            
        </div>
    );
};

export default Header;