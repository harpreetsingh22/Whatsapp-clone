import  mongoose from "mongoose";





const Connection = async()=>{
  const URL=`mongodb://harry:harry1234@chatapp-shard-00-00.eugzr.mongodb.net:27017,chatapp-shard-00-01.eugzr.mongodb.net:27017,chatapp-shard-00-02.eugzr.mongodb.net:27017/Project0?ssl=true&replicaSet=atlas-f6adb2-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{ 
        await mongoose.connect(URL, {useNewUrlParser: true,
            useUnifiedTopology: true});
    console.log("database connected successfully") ;

    }
    catch(error){
      console.log("error while connecting to mongodb :" ,error)
    }

}


export default Connection ;