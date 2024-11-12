
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
   
    name: {
        type: String,
        required: true
    },
    
    pincode: {
        type: Number,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
  
    contact: {
        type: String,
        required: true
    },
 
   
  
    isActive: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        required: true
    },
},{timeStamps:true});

module.exports = mongoose.model('applicants', schema)