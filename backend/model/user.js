const mongoose = require('mongoose');


const ParticipantSchema = new mongoose.Schema({
    problem:{
        type:String,
        required:true
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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