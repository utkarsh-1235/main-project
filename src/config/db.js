const mongoose = require('mongoose');


require('dotenv').config();

const connectDb = async()=>{
    try{
        await mongoose
        .connect(`${process.env.MONGO_URL}`)
        .then((conn)=>{console.log(`database connected successfully ${conn.connection.host}`)})
        .catch((err)=>{console.log("ERROR", err.message)})
        
     
      
    }
    catch(err){
       console.log(`ERROR`,err);
       process.exit(1)
    }
}

module.exports = connectDb;