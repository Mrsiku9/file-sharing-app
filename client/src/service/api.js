import axios from 'axios';
 
export const uploadFileData = async (data)=>{
    const URL ='http://localhost:8000'
    try {
       const response=await axios.post(`${URL}/upload`,data);
       return response.data
        
    } catch (error) {
        console.error("Error while calling api",error.message)
        
    }
}