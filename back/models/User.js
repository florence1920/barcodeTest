var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    userName : {
        type:String
    },
    phoneNumber : {
        type:Number
    },
    goodsNumber : {
        type:Number
    },
})

const User = mongoose.model('User', UserSchema);

module.exports = User;