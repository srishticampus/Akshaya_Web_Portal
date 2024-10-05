

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
    username: {
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
    district: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    village: {
        type: String,
        required: true
    },
    taluk: {
        type: String,
        required: true
    },
    panchayath: {
        type: String,
        required: true
    },
    corporation: {
        type: String,
        required: true
    },
    // block: {
    //     type: String,
    //     required: true
    // },
    areaType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
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
},{timeStamps:true});
module.exports = mongoose.model('villageoffice', schema)