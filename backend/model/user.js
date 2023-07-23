const mongoose =require('mongoose');
const validator = require("validator");


const ParticipantSchema = new mongoose.Schema({
    problem:{
        type:String,
        required:true
    },
     email:{
        type:String,
        validate: [validator.isEmail, "please Enter a validate Email"]
    },
   
    Participants:[{
     name:{
        type:String,
    },
    idn:{
        type:String,
    }
   }],

    joinAt: {
        type: Date,
        default: Date.now()
    }}
)

module.exports = mongoose.model("Participant", ParticipantSchema)