import message from "../model/Message.js";



export const newMessage = async (request, response) => {
    const newMessage = new message(request.body);
    try {
        
        await newMessage.save();
        response.status(200).json(request.body);
    } catch (error) {
        response.status(500).json(error);
    }

}


export const getMessage=async(request,response)=>{
try{
   const messag=await message.find({conversationId:request.params.id})
   response.status(200).json(messag) ;

}
catch(error){
    response.status(500).json(error);


}




}
