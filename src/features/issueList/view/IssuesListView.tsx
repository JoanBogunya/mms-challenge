import styled from "styled-components";
import { Card, Divider, Loader, RadioGroup, SpaceBetween, Subtitle, Typography } from "../../../components/common";
import SearchBar from "../components/SearchBar.test.tsx/SearchBar";
import { useSearchIssues } from "../hooks/useSearchIssues";
import type { IssueState } from "../hooks/useSearchIssues";
import { useEffect, useState } from "react";
import IssuesList from "../components/IssuesList/IssuesList";
import IssuesListPagination from "../components/IssuesListPagination/IssuesListPagination";
import { SearchProvider } from "../context/SearchProvider";
import { useSearchContext } from "../context/SearchContext";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
min-height: 100vh;
`

const CardHeader = styled.div`
padding: 0 0 8px 0;
`

const IssuesListView = () => {
    return <SearchProvider>
        <IssuesListViewContent />
    </SearchProvider>
}

const IssuesListViewContent = () => {
    const { searchTerm, setSearchTerm, state, setState } = useSearchContext();
    const [afterCursor, setAfterCursor] = useState<string | null>(null);
    const [beforeCursor, setBeforeCursor] = useState<string | null>(null);
    const { isFetching,
        issues,
        isLoading,
        hasNextPage,
        hasPreviousPage,
        endCursor,
        startCursor,
        error,
    } = useSearchIssues({
        searchTerm: searchTerm,
        state: state,
        after: afterCursor,
        before: beforeCursor
    });

    useEffect(() => {
        setAfterCursor(null);
        setBeforeCursor(null);
    }, [searchTerm, state]);


    const onSearch = (value: string) => {
        setBeforeCursor(null);
        setAfterCursor(null);
        setSearchTerm(value);
    };

    const goToNextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setAfterCursor(endCursor);
        setBeforeCursor(null);
    };

    const goToPreviousPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        setBeforeCursor(startCursor);
        setAfterCursor(null);
    };
    if (error) {
        //ideally we would implement this in another way, but i did it like this due to time constraints
        console.error(error.message);
        return <Container>
            <Card>
                <Typography>The following error has occured, please try again later</Typography>
                <Typography $variant="body2" $fontSize="small">{error.message}</Typography>
            </Card>
        </Container>
    }
    return (
        <Container>
            <Card>
                <CardHeader>
                    <SpaceBetween>
                        <Subtitle>React repository issues</Subtitle>
                        <RadioGroup
                            selected={state}
                            options={[
                                { label: 'All', value: 'ALL' },
                                { label: 'Open', value: 'OPEN' },
                                { label: 'Closed', value: 'CLOSED' }
                            ]}
                            name="Issue state"
                            onChange={(value) => setState(value as IssueState)}
                        />
                        <SearchBar value={searchTerm} onSearch={onSearch} />
                    </SpaceBetween>
                </CardHeader>
                <Divider />
                {isFetching || isLoading ? <Loader /> : <IssuesList issues={issues} />}
                {(issues && issues.length) && !(isFetching || isLoading) ?
                    <IssuesListPagination
                        goToNextPage={goToNextPage}
                        goToPreviousPage={goToPreviousPage}
                        hasNextPage={hasNextPage}
                        hasPreviousPage={hasPreviousPage}
                    />
                    : null}
            </Card>
        </Container>
    )
};

export default IssuesListView