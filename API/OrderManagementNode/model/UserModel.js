const mongoose = require('mongoose');
const AddressModel = require('./AddressModel');

const UserSchema = mongoose.Schema({
    _id: Number,
    name: String,
    phone: String,
    email: String,
    address: {
        type: Number,
        ref: 'Address'
    }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;