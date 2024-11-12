
const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

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
    centreNo: {
        type: Number,
        unique: true
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
        type: Object,
        required: true
    },
    cardStatus: {
        type: Boolean,
        default: false
    },
    card: {
        type: Number,

    },
    cardName: {
        type: String,

    },
    cvv: {
        type: Number,

    },
    expiry: {
        type: Date,

    },
}, { timeStamps: true });
schema.plugin(AutoIncrement, { inc_field: 'centreNo' });
module.exports = mongoose.model('akshaya', schema)