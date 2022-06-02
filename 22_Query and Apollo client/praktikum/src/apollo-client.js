import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://database-apollo-3229.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "XQMZhCLG4H54uwBaa6nb3lY4ZU99B9IQhyVUcc0L6Y06mwv7qyNLt7fXxcd5AGdq",
  },
});

export default client;
