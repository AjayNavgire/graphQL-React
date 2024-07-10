var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var { ruruHTML } = require("ruru/server");
const cors = require("cors")

// Once u import here
// var UserModel = require("./model/users.js"); 
var { getAllUser, getUserById, addUser, updateUser, deleteUserById } = require('./model/UserImpl.js')
var mycontext = {
    "getAllUser" : getAllUser,
    "getUserById" : getUserById,
    "addUser" : addUser,
    "updateUser": updateUser,
    "deleteUserById":deleteUserById

}


const userSchema=require("./schema/Index.js");
const { mongo } = require("./config/db.js");
const app = express();

function loggingMiddleware(req, res, next){
console.log(req.ip);
next();
// return [
//     async (req, res, next) => {
//       try {
//         console.log("req",req.ip)
//         next();
//       } catch (e) {
//         console.log("eeeeeee",e)
//       }
//     },
//   ];
}



const PORT = 4600;

app.use(loggingMiddleware)
app.use(cors());
app.use(express.json())

// Create and use GraphQL Handler
var companyDetails = {
    "campnayName":"NeoSoft",
    "baseLocation":"Andheri, Mumbai",
}


// express accepts any kind of request in all get/post/put/delete

app.all(
    "/graphql",
    createHandler({
        schema: userSchema,
        rootValue: companyDetails,
        context: mycontext
    })
)

//database connectivity
const mongoose = require('./config/db.js')

app.listen(PORT, ()=>{
    console.log(`Server is listerning on http://localhost:${PORT}`)
})

app.get("/", (req, res)=>{
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql"}))    
})
