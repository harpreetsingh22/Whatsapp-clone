
import {Box,Typography,makeStyles} from "@material-ui/core"  ;
import { AccountContext } from "../../context/AccountProvider";
import { useContext, useEffect, useState } from "react";
import {getConversation, setConversation} from "../../service/api" ;
import {UserContext} from "../../context/UserProvider" ;


const useStyles=makeStyles({

  displayPicture:{
      height:50 ,
      width :50  ,
      borderRadius:'50%' ,
      padding :'0 14px'
  } ,

  component:{
      display:'flex' ,
      height: 40 ,
      padding :'13px 0' ,
      cursor:'pointer'

  } ,

  timestamp:{
      fontSize:12 ,
      marginLeft:'auto' ,
      marginRight: 20,
      color: '#00000099'
  } ,

  text:{
    display: 'block',
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 14
  }


})




const Conversation=({user})=>{
    const classes=useStyles()  ;
     const {account,newMessageFlag}=useContext(AccountContext)   ;
       const {setPerson}=useContext(UserContext) ;
      const [message,setMessage]=useState({}) ;

   useEffect(()=>{
      const getConversationMessage=async()=>{
        const data=await getConversation({sender:account.email,receiver:user.email})    ;
          setMessage({text:data.message,timestamp: data.updatedAt}) ;
      }
      getConversationMessage() ;
   },[newMessageFlag])





    const setUser=async()=>{

        setPerson(user)   ;
        await setConversation({senderId:account.email,receiverId:user.email})   ;
    }

    
return(

<Box className={classes.component} onClick={()=>setUser()}>
    <Box>
      <img src={user.imageUrl} alt='no dp' className={classes.displayPicture} />

    </Box>
   <Box style={{width: '100%'}}>
       <Box style={{display: 'flex'}}>


          <Typography>{user.name}</Typography>
          {
             message.text && 
             <Typography className={classes.timestamp}>
                 {new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}
             </Typography>      
          }

       </Box>

           <Box className={classes.text}>
               {message.text}
           </Box>


   </Box>





</Box>



)



}

export default Conversation ;