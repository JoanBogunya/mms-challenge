import { useQuery } from '@apollo/client/react';
import { SEARCH_ISSUES } from '../graphql/searchIssues';

export type IssueState = 'OPEN' | 'CLOSED' | 'ALL';

interface Label {
    name: string;
}

interface Author {
    login: string;
}

export interface Issue {
    number: number;
    title: string;
    body: string;
    state: string;
    createdAt: string;
    author: Author | null;
    labels: {
        nodes: Label[];
    };
}

interface PageInfo {
    endCursor: string | null;
    hasNextPage: boolean;
}

interface SearchIssuesData {
    search: {
        issueCount: number;
        pageInfo: PageInfo;
        edges: {
            node: Issue;
        }[];
    };
}

interface SearchIssuesVars {
    query: string;
    first: number;
    after?: string;
}

interface SearchIssuesProps {
    searchTerm: string;
    state: IssueState;
    after?: string;
}

interface SearchIssuesProps {
    searchTerm: string,
    state: IssueState,
    after?: string
}

export const useSearchIssues = ({
    searchTerm,
    state,
    after
}: SearchIssuesProps) => {
    const stateFilter = state === 'ALL' ? '' : `is:${state.toLowerCase()}`;
    const query = `repo:facebook/react is:issue ${stateFilter} in:title,body ${searchTerm}`;

    const { data, loading, error, fetchMore, networkStatus }: useQuery.Result<SearchIssuesData, SearchIssuesVars> = useQuery(SEARCH_ISSUES, {
        variables: { query, first: 20, after },
        notifyOnNetworkStatusChange: true,
    });

    const issues = data?.search?.edges?.map((edge) => edge?.node) ?? [];
    const pageInfo = data?.search?.pageInfo ?? {};
    const issueCount = data?.search?.issueCount ?? 0;
    return {
        isLoading: loading,
        isFetching: networkStatus === 3,
        error,
        issues,
        issueCount,
        hasNextPage: pageInfo.hasNextPage ?? false,
        endCursor: pageInfo.endCursor ?? null,
        fetchMore,
    };
};