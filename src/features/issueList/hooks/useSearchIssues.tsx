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
    startCursor: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
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
    first: number | null;
    last: number | null;
    after: string | null;
    before: string | null;
}

interface SearchIssuesProps {
    searchTerm: string;
    state: IssueState;
    after: string | null;
    before: string | null;
}

interface SearchIssuesProps {
    searchTerm: string,
    state: IssueState,
    after: string | null;
    before: string | null;
}

export const useSearchIssues = ({
    searchTerm,
    state,
    after,
    before
}: SearchIssuesProps) => {
    const stateFilter = state === 'ALL' ? '' : `is:${state.toLowerCase()}`;
    const query = `repo:facebook/react is:issue ${stateFilter} in:title,body ${searchTerm}`;

    const { data, loading, error, fetchMore, networkStatus, refetch }: useQuery.Result<SearchIssuesData, SearchIssuesVars> = useQuery(SEARCH_ISSUES, {
        variables: { query, first: !before ? 20 : null, last: !after && before ? 20 : null, after, before },
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
        hasPreviousPage: pageInfo.hasPreviousPage ?? false,
        startCursor: pageInfo.startCursor ?? null,
        endCursor: pageInfo.endCursor ?? null,
        fetchMore,
        refetch
    };
};