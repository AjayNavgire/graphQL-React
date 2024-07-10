const graphql = require("graphql");
const Address = require ("./AddressType");
const {
    GraphQLObjectType,GraphQLInt,GraphQLString,
}=graphql;

const User=new GraphQLObjectType({
    name : 'user',
    fields:{
        _id : {type : GraphQLInt},
        name : {type : GraphQLString},
        email : {type : GraphQLString},
        phone : {type : GraphQLString},
        address : {type : Address}
    }
});

module.exports=User;
// const graphql = require("graphql");
// const { 
//     GraphQLInt,
//     GraphQLString,
//     GraphQLObjectType,
// } = graphql;


// //describe
// const User = new GraphQLObjectType({
//     name:'user',
//     fields: {
//         _id: {type: GraphQLInt},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//         phone: {type: GraphQLString}
//     }
// });

// module.exports = User;