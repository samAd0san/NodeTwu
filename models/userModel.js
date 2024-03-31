const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username : {type: String},
    password : {type: String},
    email : {type: String, unique : true},
    active : {type : Boolean, default : true},
    role : {type : String, default : 'User'},
    createdDate : {type: Date},
    updatedDate : {type: Date, default : Date.now}
});

module.exports = mongoose.model('user',schema);