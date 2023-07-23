const mongoose = require("mongoose");

const  connectDb= ()=>{
   mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("mongodb connected with server!!")})
}
module.exports=connectDb