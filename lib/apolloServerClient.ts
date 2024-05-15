import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

const uri =
  process.env.NODE_ENV === 'production' ? process.env.APP_GRAPHQL : process.env.APP_GRAPHQL_DEV

export const { getClient: apolloServerClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri
    })
  })
})
