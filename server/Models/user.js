const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema =new Schema({
    name:{type:String, default:null},
    email:{type:String, default:null},
    password:{type:String, default:null},
},
{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);