import img from './../../../../assets/Images/suppor1.jpg'
import img2 from './../../../../assets/Images/camp.jpg'
import img3 from './../../../../assets/Images/professsor.png'
import img4 from './../../../../assets/Images/medicin.png'

const Support = () => {
    return (

        <div className='  md:px-10 '>
            <div className='grid md:grid-cols-4 gap-4 border-x-8'>

           

            <div className='flex items-center   rounded-xl py-2 pl-8'>
                <div className='bg-gray-300 p-2 rounded-full'>
                    <img className='h-10 w-10  rounded-full' src={img2} alt="" />
                </div>

                <div className='ml-3 '>
                    <p className='font-semibold text-lg'>Medical Camp</p>
                    <p>Free all Treatment</p>
                </div>
            </div>


            <div className='flex items-center pl-8'>
            <div className='bg-gray-300 p-2 rounded-full'>
                    <img className='h-10 w-10  rounded-full' src={img3} alt="" />
                </div>
                <div className='ml-3 '>
                    <p className='font-semibold text-lg'>Dr Professor</p>
                    <p>30 professor Attend right now</p>
                </div>
            </div>


            <div className='flex items-center pl-8'>
            <div className='bg-gray-300 p-2 rounded-full'>
                    <img className='h-10 w-10  rounded-full' src={img4} alt="" />
                </div>
                <div className='ml-3 '>
                    <p className='font-semibold text-lg'>Get 20% of Medicine</p>
                    <p>When you sign up</p>
                </div>
            </div>


            <div className='flex items-center pl-8'>
            <div className='bg-gray-300 p-2 rounded-full'>
                    <img className='h-10 w-10  rounded-full' src={img} alt="" />
                </div>
                <div className='ml-3 '>
                    <p className='font-semibold text-lg'> We support</p>
                    <p>24/7 amazing service</p>
                </div>
            </div>







            </div>
        </div>
    );
};

export default Support;