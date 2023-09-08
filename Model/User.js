const mongoose = require('mongoose');
const { Schema } = mongoose;
const user = new Schema({
    name: {type: String, required:true},
    email: {type:String, required:true},
    mobile:{type:Number, required:true},
    age:{type:Number, required:true},
    created_at:{type:Date, default:Date.now}
});

module.exports = mongoose.model('mycollection', user);
