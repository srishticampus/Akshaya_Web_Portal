const mongoose=require("mongoose")

const schema=mongoose.Schema({
    comments:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },

},{timestamps:true});
module.exports=mongoose.model('feedback',schema)