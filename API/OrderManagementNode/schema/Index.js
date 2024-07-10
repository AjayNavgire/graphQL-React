const graphql = require("graphql");
const UserModel = require("../model/users");
const {USER_LIST, GET_USER} = require("./Queries/UserQueries");
const {USER_ADD, USER_UPDATE, USER_DELETE} = require("./Mutations/UserMutation");
const { 
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} = graphql;


//describe
const User = new GraphQLObjectType({
    name:'user',
    fields: {
        _id: {type: GraphQLInt},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString}
    }
});

const Query = new GraphQLObjectType({
    name: 'userlist',
    fields: {
        fetchUsers: USER_LIST,
        getuser: GET_USER
    }
})

const Mutations = new GraphQLObjectType({
    name: 'createuser',
    fields: {
        addUsers: USER_ADD,
        updateUser: USER_UPDATE,
        deleteUser: USER_DELETE
    }
})

module.exports = new GraphQLSchema({
    query: Query,
    mutation: Mutations
})