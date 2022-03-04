const mongoose = require("mongoose");

const dbCon = ()=>{
   try{ 
    const conn = mongoose.connect(process.env.DATABASE_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    console.log('Database Connected')
   }catch(err){
       console.log('error:'+ err.message)
   }
}
module.exports = dbCon;