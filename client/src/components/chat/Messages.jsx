import {Box,makeStyles} from "@material-ui/core" ;
import Footer from './Footer' ;
import {useState,useContext, useEffect} from 'react'  ;
import {AccountContext} from "../../context/AccountProvider";
import { UserContext } from "../../context/UserProvider";
import { newMessages,getMessages } from "../../service/api";
import Message from "./Message";

 
const useStyles=makeStyles({
 wrapper:{
    backgroundImage:`url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
     backgroundSize:'50%'
 } ,
 component:{
     height:'79vh'
 }  ,

 container :{
     padding :'1px 80px' 
 }

}) ;


const Messages=({conversation})=>{
    const classes=useStyles()  ;
    const [value,setValue]=useState()   ;
    const {account}=useContext(AccountContext) ;
    const {person}=useContext(UserContext)  ;
   
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        const getMessageDetails=async()=>{
            let response = await getMessages(conversation._id)  ;
               setMessages(response.data)  ;
               console.log(messages) ;
               
        }
        getMessageDetails() ;

    },[conversation?._id])




    const sendText = async (e) => {
      let code = e.keyCode || e.which;
      if(!value) return;

      


    

      if(code === 13) { 
          let message = {
              sender: account.email,
              conversationId: conversation._id ,
              text: value
          };

          
          await newMessages(message);

        
      } 
    }

    return (
  <Box className={classes.wrapper}>
     <Box className={classes.component}>
     {
                    messages && messages.map(message => (
                        <Box className={classes.container} >
                          <Message message={message}/>
                        </Box>
                    ))
                }
     </Box>
     <Footer sendText={sendText} value={value} setValue={setValue}/>
 </Box>
 
 
    )
 
 
 
 }
 
 
 export default Messages ;