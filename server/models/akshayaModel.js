
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    regNo: {
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
    panchayath: {
        type: String,
        required: true
    },
   
    adminApproved: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    certificate: {
        type: file,
        required: true
    },
},{timeStamps:true});
module.exports = mongoose.model('villageoffice', schema)