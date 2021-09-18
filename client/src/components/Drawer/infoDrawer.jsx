import {Drawer,Box,Typography,makeStyles} from '@material-ui/core'  ;
import { ArrowBack } from '@material-ui/icons';
import Profile from './Profile';


const UseStyles=makeStyles({

    header:{
      backgroundColor:"#00bfa5" ,
      height:97,
      color:'#fff'  ,
      display:'flex' ,
      '& > *' :{
          marginTop:'auto' ,
          padding :15 ,
          fontWeight:600  
      }

    }

})  ; 





const infoDrawer=({open,setOpen})=>{
       const classes=UseStyles()  ;
  const handleClose=()=>{
    setOpen(false)
}

return (
  
< Drawer open={open} onClose={handleClose}>

<Box className={classes.header}>
     <ArrowBack onClick={()=>handleClose()}/>
   <Typography> Profile</Typography>
   </Box>

   <Profile/>
</Drawer>



)



}




export default infoDrawer  ;