import { Dialog,withStyles,makeStyles,Box,Typography,ListItem,List } from "@material-ui/core";
import {GoogleLogin} from 'react-google-login' ;
import {useContext} from 'react'  ;
import { AccountContext } from "../../context/AccountProvider";



const useStyles=makeStyles({

component:{
   display:'flex' 
} ,

leftComponent:{
   padding :'56px 0px 56px 56px'
}   ,
 
qrcode:{
  height:264 ,
  width :264  ,
  padding :'50px 0 0 50px'
} ,

title:{
    fontSize:26 ,
    marginBottom:25,
    color:'#525252' ,
    
fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
fontWeight:300
}  ,

list:{
   '& > *':{
       fontSize:18 ,
       padding :0 ,
       marginTop:15 ,
       lineHeight:'28px' ,
       color:"4a4a4a"

   }

}



}

)







const style={
    DialogPaper:{
        height:'95%' ,
        width:'60%',
        marginTop:'12%',
        boxshadow:'none' ,
        borderRadius:0 ,
        maxHeight:'100%' ,
        maxWidth:'100%' ,
        overflow:'hidden'

    }
}



const Login=({classes})=>{
    const classname=useStyles() ;
    const clientId='60066314329-8veoibp3t5j6lpfdmqa1dnfje8ouuj05.apps.googleusercontent.com' ;
    const {account,setAccount}=useContext(AccountContext) ;
     
   const onLoginSuccess=(res)=>{
       console.log("login successfully :",res.profileObj)  ;
      setAccount(res.profileObj)  ;
      
   }


    const onLoginFailure=()=>{
        console.log("login failed") ;
    }





return (
    <Dialog open={true}
    classes = { { paper:classes.DialogPaper}}
    BackdropProps={{style:{backgroundColor:'unset' }} }>
     <Box className={classname.component}> 
     <Box className={classname.leftComponent}> 
          <Typography className={classname.title}>To use whatsapp on your phone</Typography>
           <List className={classname.list}>
            <ListItem>1. Open Whatsapp on your phone</ListItem>          
            <ListItem>2. Tap menu or setting and select Linked devices</ListItem>
            <ListItem>3. Point your phone to this screen to capture the code</ListItem>

           </List>


     </Box> 

        <Box style={{position:'relative'}}>


         <img src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg' alt='qr' className={classname.qrcode}></img>
            <Box style={{position:'absolute',left:'50%',top:'50%'}}>
           <GoogleLogin
           clientId={clientId}
           buttonText=""
           isSignedIn={true}
           onSuccess={onLoginSuccess}
           onFailure={onLoginFailure}
           cookiePolicy={'single_host_origin'}

           />
         </Box>
         </Box>     





     </Box>
    </Dialog>  )
}

export default withStyles(style)(Login) ;