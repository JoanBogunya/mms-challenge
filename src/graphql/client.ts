import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const client = new ApolloClient({
    link: new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
            Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
    }),
    cache: new InMemoryCache(),
})