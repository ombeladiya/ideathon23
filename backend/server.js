const app=require('./app');
const dotenv=require('dotenv');
const connectDb = require("./config/db");


//handling uncaught exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}` );
    console.log("shutting down the server due to uncaught Exception");

    process.exit(1);
})

dotenv.config({path:"backend/config/config.env"});




connectDb();

const server=app.listen(process.env.PORT,()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}`);
});




//unhandled promise rejection

process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("shutting down the server due to unhandled Rejection");

server.close(()=>{
process.exit(1);
});

});