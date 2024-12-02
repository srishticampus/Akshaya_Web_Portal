const mongoose = require("mongoose");
const cSchema = new mongoose.Schema({

    appId: {
        type: String,
        required: true,
    },
    issueDate: { type: Date, default: Date.now },
    status: { type: String, default: "Pending" },
    appNo: {
        type: Number
    },
applicantId:{
type:mongoose.Types.ObjectId,
ref:'applicants',
required:true
},
applicationType:{type:String},

        vo:{
            type:mongoose.Types.ObjectId,
            ref:'villageoffice',
            
        },
        akshayaId:{
            type:mongoose.Types.ObjectId,
            ref:'akshaya',
            
        },

    
});

module.exports = mongoose.model("certificates", cSchema);
