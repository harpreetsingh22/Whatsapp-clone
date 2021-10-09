import express from 'express' ;
import Connection from './database/db.js' ;
import cors from 'cors'  ;
import bodyParser from 'body-parser'   ;
import route from './routes/Route.js';

const PORT=8000 ;
const app=express() ;
app.use(cors())  ;

app.use(bodyParser.json({extended:true})) ;
app.use(bodyParser.urlencoded({extended:true})) ;

app.use('/',route)  ;



Connection() ;

app.listen(PORT,()=>console.log(`server is running successsfully at ${PORT}`)) ;