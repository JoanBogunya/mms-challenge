import { gql } from '@apollo/client';

export const SEARCH_ISSUES = gql`
  query SearchIssues($query: String!, $first: Int, $last: Int, $after: String, $before: String) {
    search(query: $query, type: ISSUE, first: $first, last: $last, after: $after, before: $before) {
      issueCount
       pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          ... on Issue {
            number
            title
            state
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
