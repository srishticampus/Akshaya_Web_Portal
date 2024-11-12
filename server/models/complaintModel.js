
const mongoose=require("mongoose")

const schema=mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    appType:{
        type:String,
        required:true
    },
    appDate:{
        type:Date,
        required:true
    },
    complaintType:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
   
    akshayaId:{
        type:mongoose.Types.ObjectId,
        ref:'villageoffice',
        required:true
    }

},{timeStamps:true});
module.exports=mongoose.model('complaints',schema)