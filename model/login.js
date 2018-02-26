const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const loginSchema = new Schema({"user_name":{type:String,required:true},
"password":{type:String,required:true}});
const loginCollection = mongoose.model('loginCollection',loginSchema,'loginCollection');
module.exports=loginCollection;
