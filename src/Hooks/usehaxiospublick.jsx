 
import axios from "axios";

const useAxios = axios.create({
    baseURL: 'https://medical-camp-server-mu.vercel.app'
})

const useAxiosPublic = () => {
    return useAxios;
}
 
export default useAxiosPublic;