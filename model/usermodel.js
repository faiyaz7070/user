const mongoose=require("mongoose")

const userschema=mongoose.Schema({
    name:String,
    email:String,
    pass:String
})

const UserModel=mongoose.model("user_registered",userschema)
module.exports={
    UserModel
}