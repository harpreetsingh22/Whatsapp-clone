import mongoose  from 'mongoose';


const userSchema=new mongoose.Schema({ 

googleID: {
       type: String  ,
       require: true 
} ,
imageUrl: {
    type: String  ,
    require: true 
} ,

email: {
    type: String  ,
    require: true 
} ,
name: {
    type: String  ,
    require: true 
} ,
givenName: {
    type: String  ,
    require: true 
} ,

familyName: {
    type: String  ,
    require: true 
} ,



})



const User= mongoose.model('user',userSchema) ;

export default User ;