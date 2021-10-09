import axios from 'axios'  ;
const URL='http://localhost:8000'    ;

export const addUser= async (data)=>{
   try{
   return await axios.post(`${URL}/add`,data) ;

   }
   catch(error){
       console.log('error while calling api',error) ;
   }



}




export const getUsers= async ()=>{
    try{
    let response= await axios.get(`${URL}/users`) ;
     console.log(response.data) ;
    return response.data ;
 
    }
    catch(error){
        console.log('error while calling get users api',error) ;
    }
 
 
 
 }


export const setConversation=async (data)=>{

try{
  await axios.post(`${URL}/conversation/add`,data)    ;
}
catch(error){

  console.log("error while calling setConversation API",error)  ;
}



}






export const getConversation=async (data)=>{

  try{
    let response=await axios.post(`${URL}/conversation/get`,data)    ;
    return response.data    ; 
  }
  catch(error){
  
    console.log("error while calling setConversation API",error)  ;
  }
  
  
  
  }
  



  export const newMessages = async (data) => {
    try {
        return await axios.post(`${URL}/message/add`, data);
    } catch (error) {
        console.log('Error while calling newConversations API ', error);
    }
}



export const getMessages =async(id)=>{

 try{
     return await axios.get(`${URL}/message/get/${id}`) ;

 }

 catch(error){

  console.log("error while calling getMessages API ",error) ;
 }







}




    