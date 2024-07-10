// mongoose, UserModel
// call mongodb functions
// find, findOne, create
const mongoose = require("mongoose")
const UserModel = require("./users")

async function getAllUser() {
    return await UserModel.find().exec();
}

async function getUserById(id) {
    return await UserModel.findOne({ _id: id }).exec();
}

async function addUser(args) {
    console.log(args)
    return await UserModel.create({
        _id: args._id,
        name: args.name,
        email: args.email,
        phone: args.phone
    })
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