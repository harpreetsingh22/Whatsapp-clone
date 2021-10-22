import {Box} from "@material-ui/core"  ;
import ChatHeader from "./ChatHeader";
import { useState,useEffect,useContext } from "react";
import Messages from "./Messages";
 import { UserContext } from "../../context/UserProvider";
 import {AccountContext} from "../../context/AccountProvider";

import { getConversation } from "../../service/api";

const Chat=()=>{
    const {person}=useContext(UserContext)   ;
     const {account}=useContext(AccountContext)   ;
     const [conversation,setConversation]=useState({}) ;
    
useEffect(()=>{

    const getConversationDetails= async()=>{
       let data=await getConversation({sender:account.email,receiver:person.email})    ;
          setConversation(data)   ;

    }
    getConversationDetails() ;

},[person.email])  

return (

    <Box>
         <ChatHeader/>
         <Messages  conversation={conversation} person={person}/>
         
    </Box>
)



}

export default Chat  ;