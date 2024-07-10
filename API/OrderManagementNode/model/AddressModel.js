const mongoose=require("mongoose");

const AddressSchema=mongoose.Schema({
    _id:Number,
    area:String,
    city:String,
    pincode:String
})
const AddressModel=mongoose.model('Address',AddressSchema);
module.exports=AddressModel;