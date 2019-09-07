const mongoose= require('mongoose');
const {Schema}= mongoose;

const UserSchema =new Schema({
    destinatario: {type:String, required:true},
    idioma: {type:String, required:true},
    carta: {type:String, required:true},
})

module.exports = mongoose.model('sendEmail', UserSchema);