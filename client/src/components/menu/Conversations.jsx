






import { useState, useEffect, useContext } from 'react';
import { Box, makeStyles} from '@material-ui/core';


import {AccountContext} from '../../context/AccountProvider' ;

//components
import Conversation from './Conversation';
import { getUsers } from '../../service/api';

const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '81vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }
})

const Conversations = ({ text }) => {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    
     const {account}=useContext(AccountContext) ;

     useEffect(() => {
      const fetchData = async () => {
          let data = await getUsers();
          let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
          setUsers(fiteredData);
      }
      fetchData();
  }, [text]);

    

    return(
      <Box className={classes.component}> 
           {
                 users.map((user) => (
                    user.email !== account.email && 
                            <Conversation user={user} />
                            
                        
                ))
            }
           
      </Box>
   
   
   )
   
}

export default Conversations;