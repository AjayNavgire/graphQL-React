const graphql = require("graphql");
const { 
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
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

module.exports = User;