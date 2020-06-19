const { ApolloServer, gql } = require('apollo-server');
var { buildSchema } = require('graphql');
var crypto = require('crypto');
var {createUser, getProducts, getUsers, updateProduct, deleteProduct, getUserByEmail, getProductById} = require('./actions');
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Products" type defines the queryable fields for every product in our data source.
  type Product {
    id : ID
    title: String
    type: String,
    description : String,
    filename : String,
    height : Int,
    width : Int,
    price : Float,
    rating : Int
  }

  
  type User {
    firstName: String
    lastName : String
    email : String
    phone : String
    password : String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    products : [Product]
    users : [User]
    userByEmail(email : String, password : String) : User
    productById(id : Int!) : Product
  }

  input UserInput {
    id : ID!
    firstName : String
    lastName : String
    email: String
    phone: String
    password : String
  }
 
  type Mutation {
    addUser(firstName : String, lastName : String, email : String, phone : String, password : String): User
    updateProduct(id: Int!, title: String, description: String): Product
    deleteProduct(id: Int!) : Boolean
  }
`;




  // Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      products: () => getProducts(),
      users: () => getUsers(),
      userByEmail : (args, req)=> getUserByEmail(req),
      productById : (args, req) => getProductById(req)
    },
    Mutation : {
      addUser : (args, req) => createUser(req),
      updateProduct : (args, req) => updateProduct(req),
      deleteProduct : (args, req) => deleteProduct(req)
    }
  };


  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen(4001).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});