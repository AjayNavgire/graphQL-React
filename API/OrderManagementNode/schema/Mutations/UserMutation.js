const graphql = require("graphql");
const UserModel = require("../../model/UserModel");
const User = require("../Types/UserType");
const Address = require("../Types/AddressType");
const {
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLInputObjectType
} = graphql;

const AddressInputType = new GraphQLInputObjectType({
    name: 'AddressInput',
    fields: () => ({
        _id: { type: GraphQLInt },
        area: { type: GraphQLString },
        city: { type: GraphQLString },
        pincode: { type: GraphQLInt },
    }),
});

const USER_ADD = {
    type: User,
    args: {
        _id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        address: { type: AddressInputType }
    },
    resolve: async (parent, args, context) => {
        const res = await context.addUser(args)
        return res;
    }
}

const USER_UPDATE = {
    type: User,
    args: {
        _id: { type: GraphQLInt }, // id will be existing
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    },
    resolve: async (parent, args, context) => {
        const res = await context.updateUser(args)
        return res;
    }
}

const USER_DELETE = {
    type: User,
    args: {
        _id: { type: GraphQLInt }, // id will be existing
    },
    resolve: async (parent, args, context) => {
        const res = await context.deleteUserById(args._id)
        return res;
    }
}
module.exports = { USER_ADD, USER_UPDATE, USER_DELETE }