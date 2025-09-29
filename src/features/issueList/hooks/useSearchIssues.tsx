import { useQuery } from '@apollo/client/react';
import { SEARCH_ISSUES } from '../graphql/searchIssues';

type IssueState = 'OPEN' | 'CLOSED' | 'ALL';

export const useSearchIssues = (
    searchTerm: string,
    state: IssueState,
    after?: string
) => {
    const stateFilter = state === 'ALL' ? '' : `is:${state.toLowerCase()}`;
    const query = `repo:facebook/react is:issue ${stateFilter} in:title,body ${searchTerm}`;

    return useQuery(SEARCH_ISSUES, {
        variables: { query, first: 20, after },
        notifyOnNetworkStatusChange: true,
    });
};