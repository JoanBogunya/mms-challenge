import { useEffect, useState } from "react";
import { Search } from "react-feather";
import styled, { useTheme } from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;
  max-width: 400px;
  padding: 8px;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 16px;
  font-size: 16px;
  background-color: white;
  color: black;
  border: 1px solid ${props => props.theme.palette.border};
  outline: none;
`;

interface SearchBarProps {
    onSearch: (value: string) => void;
    value: string
}

const SearchBar = ({ onSearch, value }: SearchBarProps) => {
    const [query, setQuery] = useState(value);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const { palette } = useTheme();

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [query]);

    useEffect(() => {
        if (onSearch) onSearch(debouncedQuery);
    }, [debouncedQuery, onSearch]);

    useEffect(() => {
        setQuery(value);
    }, [value]);

    return (
        <SearchContainer>
            <Search color={palette.border} />
            <SearchInput
                name="Search issue"
                type="text"
                placeholder="Search issues"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </SearchContainer>
    );
};

export default SearchBar;