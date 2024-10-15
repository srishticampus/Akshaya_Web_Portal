
const mongoose=require("mongoose")

const schema=mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
    adminApproved:{
        type:Boolean,
        default:true
    },
    voId:{
        type:mongoose.Types.ObjectId,
        ref:'villageoffice',
        required:true
    }

},{timeStamps:true});
module.exports=mongoose.model('staff',schema)