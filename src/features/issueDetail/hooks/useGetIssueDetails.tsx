import { useQuery } from '@apollo/client/react';
import { GET_ISSUE_DETAILS } from '../graphql/getIssueDetails';
import { NetworkStatus } from '@apollo/client';
import { useState } from 'react';

interface Label {
    name: string;
}

interface Author {
    login: string;
}

export interface Comment {
    author: Author | null;
    body: string;
    createdAt: string;
}

export interface CommentsPageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
}

export interface IssueDetails {
    title?: string | null;
    author?: Author | null;
    body?: string | null;
    state?: string | null;
    labels?: {
        nodes: Label[];
    } | null;
    comments?: {
        nodes: Comment[];
        pageInfo: CommentsPageInfo;
    } | null;
}

interface IssueDetailsData {
    repository: {
        issue: IssueDetails | null;
    };
}

interface IssueDetailsVars {
    issueNumber: number;
    commentsAfter?: string | null;
}

interface UseGetIssueDetailsProps {
    issueNumber: number;
    skip: boolean
}

export const useGetIssueDetails = ({ issueNumber, skip }: UseGetIssueDetailsProps) => {
    const [fetchMoreError, setFetchMoreError] = useState<Error | null>(null);
    const { data, error, fetchMore, networkStatus, refetch } = useQuery<IssueDetailsData, IssueDetailsVars>(
        GET_ISSUE_DETAILS,
        {
            variables: { issueNumber },
            notifyOnNetworkStatusChange: true,
            skip: skip
        },
    );

    const issue = data?.repository.issue ?? null;
    const comments = issue?.comments?.nodes ?? [];
    const pageInfo = issue?.comments?.pageInfo ?? { endCursor: null, hasNextPage: false };

    const fetchMoreComments = async () => {
        if (!pageInfo.endCursor) return;

        try {
            setFetchMoreError(null);
            await fetchMore({
                variables: {
                    issueNumber,
                    commentsAfter: pageInfo.endCursor,
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    const newComments = fetchMoreResult?.repository.issue?.comments?.nodes ?? [];
                    const newPageInfo = fetchMoreResult?.repository.issue?.comments?.pageInfo ?? pageInfo;
                    return {
                        repository: {
                            ...prev.repository,
                            issue: {
                                ...prev.repository.issue,
                                comments: {
                                    nodes: [...(prev.repository.issue?.comments?.nodes ?? []), ...newComments],
                                    pageInfo: newPageInfo,
                                    __typename: 'IssueCommentConnection',
                                },
                            },
                        },
                    };
                },
            });
        } catch (err) {
            setFetchMoreError(err instanceof Error ? err : new Error('Unknown error'));
        }
    };


    return {
        isLoading: networkStatus === NetworkStatus.loading || networkStatus === NetworkStatus.refetch,
        isFetching: networkStatus === NetworkStatus.fetchMore,
        error,
        fetchMoreError,
        issue,
        comments,
        hasNextPage: pageInfo.hasNextPage,
        endCursor: pageInfo.endCursor,
        fetchMoreComments,
        refetch,
    };
};