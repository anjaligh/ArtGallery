const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoArt');
const Schema = mongoose.Schema;



var RegisterSchema = new Schema({
    name : {type:String,required:true},
    email:{type:String,unique:true},
    userrole:{type:String,required:true},
    password:{type:String,required:true}

 
  
});

var registerData= mongoose.model('users', RegisterSchema);                        //UserData is the model and NewBookData is the schema

module.exports = registerData;