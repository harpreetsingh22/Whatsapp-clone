import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import {Box,Typography,makeStyles} from "@material-ui/core"  ;
import { Search, MoreVert } from '@material-ui/icons';

const useStyles=makeStyles({ 
    header: {
        display :'flex'  ,
        height : 35  ,
        background: '#ededed' ,
        padding :'10px 10px'  ,
        alignItems :'center'
    } ,

    dp:{
        height : 37 ,
        width : 37  ,
        borderRadius:'50%' ,
        padding:'0 2px' 
    } ,

    name :{
        marginLeft :10 
    }  ,

    status :{
    fontSize:12 ,
    marginLeft :10 , 
    color: 'rgba(0,0,0,0.6)'
    }  ,

    rightContainer :{
        marginLeft:'auto'  ,
        '& > *':{
            padding :8 ,
            fontSize :22 ,
            color:'#919191'
        }
    }


   })  ;



const ChatHeader=()=>{
   const { person} =useContext(UserContext) ;
    const classes=useStyles()  ;

   return (

     <Box className={classes.header}>
        <img src={person.imageUrl} alt="cant find" className={classes.dp}/>
        <Box>
            <Typography className={classes.name}>{person.name}</Typography>
            <Typography className={classes.status}>Online</Typography>
        </Box>
        <Box className={classes.rightContainer}>
         <Search/>
         <MoreVert/>

        </Box>

     </Box>



   )



}


export default ChatHeader ;