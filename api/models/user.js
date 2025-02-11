const mongoose=require('mongoose');
const{Schema}=mongoose;

const UserSchemas=new Schema({
    name: String,
    email:{type:String,unique:true},
    password: String,
});
const UserModel=mongoose.model('User',UserSchemas);
module.exports=UserModel;