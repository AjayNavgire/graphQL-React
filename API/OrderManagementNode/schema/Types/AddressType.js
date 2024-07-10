const graphql = require("graphql");
const {
    GraphQLObjectType, GraphQLInt,GraphQLString,
}=graphql;

const Address=new graphql.GraphQLObjectType({
    name : 'address',
    fields:{
        _id:{type:GraphQLInt},
        area : {type : GraphQLString},
        city : {type : GraphQLString},
        pincode : {type : GraphQLInt}
    }
});

module.exports=Address;