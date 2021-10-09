
import {Box,Typography,makeStyles} from "@material-ui/core"  ;
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";
import {setConversation} from "../../service/api" ;
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

  }


})




const Conversation=({user})=>{
    const classes=useStyles()  ;
     const {account}=useContext(AccountContext)   ;
       const {setPerson}=useContext(UserContext) ;

    const setUser=async()=>{

        setPerson(user)   ;
        await setConversation({senderId:account.email,receiverId:user.email})   ;
    }

    
return(

<Box className={classes.component} onClick={()=>setUser()}>
    <Box>
      <img src={user.imageUrl} alt='no dp' className={classes.displayPicture} />

    </Box>
   <Box>
       <Box>


          <Typography>{user.name}</Typography>


       </Box>





   </Box>





</Box>



)



}

export default Conversation ;