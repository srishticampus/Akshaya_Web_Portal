const mongoose=require("mongoose")
const faq=require('./controllers/FAQcontroller')
mongoose.connect("mongodb://127.0.0.1:27017/akshaya")
var db=mongoose.connection
db.on("error",console.error.bind("error"))
db.once("open",function(){
    console.log("connection successful")
})
  faq.addDefaultFaq()
module.exports=db