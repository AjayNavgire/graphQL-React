const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: Number,
    name: String,
    phone: String,
    email: String
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;