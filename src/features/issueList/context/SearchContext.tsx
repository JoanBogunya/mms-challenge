import { createContext, useContext } from 'react';

type IssueState = 'OPEN' | 'CLOSED' | 'ALL';

interface SearchContextProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    state: IssueState;
    setState: (state: IssueState) => void;
}

export const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const useSearchContext = () => {
    const context = useContext(SearchContext);
    if (!context) throw new Error('useSearchContext must be used within a SearchProvider');
    return context;
};