import axios from "../../utils/axios"


export const getRelatedVideos = async({tags,id}) =>{

 const limit = 5;
 let queryString = tags?.length>0 ? tags?.map(tag => `tags_like =${tag}`).join('&')+ `&+id =${id}&_limit = ${limit}`:`&+id =${id}&_limit = ${limit}`
 const res = await axios.get(`/videos?${queryString}`)

 return res?.data;
}