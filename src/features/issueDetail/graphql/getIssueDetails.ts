import { gql } from '@apollo/client';

export const GET_ISSUE_DETAILS = gql`
 query GetIssueDetails($issueNumber: Int!, $commentsAfter: String) {
  repository(owner: "facebook", name: "react") {
    issue(number: $issueNumber) {
        title
        author {
          login
        }
        body
        state
        labels(first: 10) {
          nodes {
            name
          }
        }
        comments(first: 10, after: $commentsAfter) {
          nodes {
            author {
              login
            }
            body
            createdAt
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  }
`;
