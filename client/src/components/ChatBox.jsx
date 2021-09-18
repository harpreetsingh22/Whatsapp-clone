import { Dialog,withStyles,makeStyles,Box} from "@material-ui/core";
import Menu from "./menu/Menu"   ; 

 const useStyles=makeStyles(
   { component: {
       display:'flex'
    } ,

    leftComponent:{
         minWidth: 380 
    }  ,

    rightComponent:{
        borderLeft:'1px solid rgba(0,0,0,0.14)'

    }




})




const style={
    DialogPaper:{
        height:'95%' ,
        width:'91%',
        
        boxshadow:'none' ,
        borderRadius:0 ,
        maxHeight:'100%' ,
        maxWidth:'100%' ,
        overflow:'hidden'

    }
}













const ChatBox=({classes})=>{
     const classname=useStyles() ;
    return (
      <Dialog
      open={true}
      classes={{paper:classes.DialogPaper}}
      BackdropProps={{style:{backgroundColor:'unset' }} }
      >
          <Box className={classname.component}>
            
          <Box className={classname.leftComponent}>
               <Menu/>
              </Box>




              <Box className={classname.rightComponent}>
              hey!!!!!!!!!!!
              </Box>
            

  


          </Box>
      </Dialog>

    )
}


export default withStyles(style)(ChatBox) ;