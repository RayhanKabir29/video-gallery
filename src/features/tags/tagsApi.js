import axios from "../../utils/axios"


export const getTags = async() =>{
 const res = await axios.get('/tags');

 return res?.data;
}