import { response } from "express";
import conversation  from "../model/Conversation.js";


export const newConversation = async (request, response) => {
    let senderId=request.body.senderId  ;
    let receiverId=request.body.receiverId  ;
    try{
        
        const exists = await conversation.findOne({ members: { $all: [receiverId, senderId]  }})  ;

          if(exists){
            response.status(200).json("already")  ;
            return ;

          }
        

         const newConversation=new conversation({
             members:[senderId,receiverId]
         })

         await newConversation.save()  ;

         response.status(200).json("new conversation added successfully!!!")  ;

    }
    catch(error){
         
      response.status(200).json(error) ;


    }
    
}


export const getConversation=async(request,response)=>{

 try{
  const conversat = await conversation.findOne({ members: { $all: [ request.body.sender, request.body.receiver] }});
  response.status(200).json(conversat);

 }
 catch(error){
  response.status(200).json(error) ;
 }




}