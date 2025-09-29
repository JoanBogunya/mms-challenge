import { gql } from '@apollo/client';

export const SEARCH_ISSUES = gql`
  query SearchIssues($query: String!, $first: Int!, $after: String) {
    search(query: $query, type: ISSUE, first: $first, after: $after) {
      issueCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
          ... on Issue {
            number
            title
            body
            state
            createdAt
            author {
              login
            }
            labels(first: 5) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
