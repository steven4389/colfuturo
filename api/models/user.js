const mongoose= require('mongoose');
const {Schema}= mongoose;

const UserSchema =new Schema({
    username: {type:String, required:true},
    identification: {type:String, required:true},
    titulo: {type:String, required:true},
    institution: {type:String, required:true},
    empresa: {type:String, required:true}
})

module.exports = mongoose.model('users', UserSchema);