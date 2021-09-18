
import {MoreVert} from   '@material-ui/icons' ;
import { useState,useContext } from 'react';
import {Menu,MenuItem,makeStyles} from '@material-ui/core'  ; 
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constants/data';
import { AccountContext } from '../../context/AccountProvider';


const useStyles=makeStyles({
    menuItem:{
    fontSize:17 ,
    padding:'15px 60px 5px 24px' ,
    color:'#4A4A4A'

    },
   logout:{
       border:'none!important' ,
       boxShadow:'none!important' ,
       '&>*' :{
           padding:'0px!important'
       }

   }


})





const HeaderMenu=()=>{
    const[open,setOpen]=useState(false)  ;
    const {setAccount}=useContext(AccountContext) ;
    const classes=useStyles()  ;

  const handleclose=()=>{
      setOpen(false) ;
  }

   const handleClick=(event)=>{
       setOpen(event.currentTarget) ;
   }

   
const onLogoutSuccess=()=>{
   setAccount('')  ;
}



return(
<>
<MoreVert onClick={handleClick}/>

<Menu
 
  anchorEl={open}
  keepMounted
  open={Boolean(open)}
  onClose={handleclose}
  getContentAnchorEl={null}
  anchorOrigin={
     { vertical:'bottom' ,
       horizontal:'center'
  }
  }


  transformOrigin={
    { vertical:'top' ,
      horizontal:'right'
 }
 }







>
  <MenuItem onClick={handleclose} className={classes.menuItem}>Profile</MenuItem>
 
  <MenuItem onClick={handleclose}  className={classes.menuItem}>
          <GoogleLogout
           clientId={clientId}
           buttonText="Logut"
           onLogoutSuccess={onLogoutSuccess}
          
           className={classes.logout}
          
          
          
          ></GoogleLogout>




  </MenuItem>
</Menu>

</>

)
}

export default HeaderMenu  ;