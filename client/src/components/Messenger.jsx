import {AppBar,Toolbar , makeStyles,Box} from '@material-ui/core' ;
import React, { Component,useContext } from 'react';
import Login from './accounts/Login';
import { AccountContext } from '../context/AccountProvider';
import ChatBox from './ChatBox';
const useStyles=makeStyles({
    loginHeader:{
        height:200 ,
         background:'#00bfa5' ,
         boxshadow:'none '
    } ,
  component:{
    background:'#DCDCDC' ,
     height:'100vh'
  }    ,

      Header:{
    height:115 ,
     background:'#128C7E' ,
     boxshadow:'none '
}





}

)


const Messenger=()=>{
     const classes=useStyles() ;
    
       const {account}=useContext(AccountContext)  ;
    return( 
        <Box className={classes.component}>
        <AppBar className={account ? classes.Header :classes.loginHeader}>
        <Toolbar></Toolbar>
       

        </AppBar>
       { account ?  <ChatBox/> :<Login/> } 
      
    </Box>


    )
}

export default Messenger ;