const mongoose=require('mongoose');

const bookschema=new mongoose.Schema({
    img:{type:String},
    title:{type:String},
    description:{type:String},
    status:{type:String},
    email:{type:String}
});



module.exports=bookschema;