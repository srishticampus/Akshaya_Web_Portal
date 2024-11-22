const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const applicationSchema = new mongoose.Schema({

    applicationType: {
        type: String,
        required: true,
    },
    applicationDate: { type: Date, default: Date.now },
    status: { type: String, default: "Pending" },
    appNo: {
        type: Number
    },
applicantId:{
type:mongoose.Types.ObjectId,
ref:'applicants',
required:true
},
aadhar:{type:Number},
item:{type:String},
proofs:{type:[]},
doc1:{type:Object},
doc2:{type:Object},
doc3:{type:Object},
    passport: {
        passportNumber: { type: String },
        issueDate: { type: Date },
    },
    panCard: {
        panNumber: { type: String },
    },
   
    aadhar: { type: String },

   
        ward: { type: Number },
        door: { type: Number },
        subNo: { type: Number },
        year: { type: Number },
        district: { type: String },
        vo:{
            type:mongoose.Types.ObjectId,
            ref:'villageoffice',
            
        },

        localbody: { type: String },
        type: { type: String },
        income:{ type: String },
        incomeSource:{ type: String },
        relationName:{ type: String },

        casteCategory:{ type: String },
        subCaste:{ type: String },
    
        paymentStatus: { type: Boolean, default: false },
amount:{type:Number},
    isActive: { type: Boolean, default: false }
});
applicationSchema.plugin(AutoIncrement, { inc_field: 'appNo' });
module.exports = mongoose.model("Application", applicationSchema);
