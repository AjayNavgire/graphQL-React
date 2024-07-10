const graphql = require("graphql");
const User = require("../Types/UserType");
var { getAllUser, getUserById, addUser } = require('../../model/UserImpl')
// const UserModel = require("../../model/users");
const {
    GraphQLList,
    GraphQLInt
} = graphql;


const USER_LIST = {
    type: new GraphQLList(User),
    resolve: async (parent, args, context) => {
        return await context.getAllUser()
    }
}

const GET_USER = {
    type: User,
    args:{
        _id: {type:GraphQLInt}
    },
    resolve: async (src, args, context) => {
        return await context.getUserById(args._id)
    }
}

module.exports = {
    USER_LIST,
    GET_USER
};