import { ApolloServer, gql } from 'apollo-server'

// GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`

// Fake data
const users = [
  {
    id: '1',
    name: 'Din Djarin',
  },
  {
    id: '2',
    name: 'Grogu',
  },
  {
    id: '3',
    name: 'Boba Fett',
  },
  {
    id: '4',
    name: 'Moff Gideon',
  },
]

// Resolvers
const resolvers = {
  Query: {
    users: () => users,
    user: (parent: any, args: any, context: any, info: any) => users.find(user => user.id === args.id),
  },
}

// Create an instance of Apollo Server
const server = new ApolloServer({ typeDefs, resolvers })

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
