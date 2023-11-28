import moment from 'moment';
 
const Datetime = () => {
    return (
        <div className='navbar bg-slate-50 text-slate-600  mb-4  mt-2  justify-between'>
            < p className=' text-xl'>{moment().format("dddd, MMMM Do YYYY, ")}</p>

          
               
                 < p className='text-xl font-semibold navbar-end'>Time:{moment().format(" h:mm:ss a")}</p>
       
           


        </div>
    );
};

export default Datetime;