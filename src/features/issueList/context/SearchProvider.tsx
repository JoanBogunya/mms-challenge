import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchContext } from './SearchContext';

type IssueState = 'OPEN' | 'CLOSED' | 'ALL';

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchTerm = searchParams.get('search') || '';
    const state = (searchParams.get('state') as IssueState) || 'ALL';

    const setSearchTerm = useCallback(
        (term: string) => setSearchParams({ search: term, state }),
        [setSearchParams, state]
    );

    const setState = useCallback(
        (newState: IssueState) => setSearchParams({ search: searchTerm, state: newState }),
        [setSearchParams, searchTerm]
    );

    return (
        <SearchContext.Provider value={{ searchTerm, setSearchTerm, state, setState }}>
            {children}
        </SearchContext.Provider>
    );
};