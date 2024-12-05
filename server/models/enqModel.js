
const mongoose=require("mongoose")

const schema=mongoose.Schema({
    email:{
        type:String,
     
        required:true,
    },
    address:{
        type:String,
    },
    contact:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    name:{
        type:String,
        required:true
    },
 
 
    appType:{
        type:String,
        required:true
    },
    enqType:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true
    },
   
  

},{ timestamps: true });
module.exports=mongoose.model('enquiries',schema)