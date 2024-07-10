// mongoose, UserModel
// call mongodb functions
// find, findOne, create
const mongoose = require("mongoose")
const UserModel = require("./UserModel");
const AddressModel = require("./AddressModel");

async function getAllUser() {
    return await UserModel.find().exec();
}

async function getUserById(id) {
    return await UserModel.findOne({ _id: id }).exec();
}

async function addUser(args) {
    // save or create
const UserDoc = new UserModel();
const AddressDoc = new AddressModel();
AddressDoc._id = args.address._id,
AddressDoc.area = args.address.area,
AddressDoc.city = args.address.city,
AddressDoc.pincode = args.address.pincode,

UserDoc._id = args._id
UserDoc.name = args.name
UserDoc.email = args.email
UserDoc.phone = args.phone
UserDoc.address = args.address._id

const add = await AddressDoc.save();
const user = await UserDoc.save();
return user;
    
}

async function updateUser(args) {

    const filter = { _id: args._id };
    const update = { name: args.name, phone: args.phone, email: args.email }
    return await UserModel.findOneAndUpdate(filter, update, {new: true})
}

async function deleteUserById(id) {

    return await UserModel.deleteOne({_id: id});
}

module.exports = { getAllUser, getUserById, addUser, updateUser, deleteUserById }