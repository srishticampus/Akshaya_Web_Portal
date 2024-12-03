
const mongoose=require("mongoose")

const schema=mongoose.Schema({
    question:{
        type:String,
     
        required:true,
    },
    answer:{
        type:String,
        required:true
    }
   
   
    

},{ timestamps: true });
module.exports=mongoose.model('FAQs',schema)