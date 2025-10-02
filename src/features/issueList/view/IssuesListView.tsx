import styled from "styled-components";
import { Card, Divider, Loader, RadioGroup, SpaceBetween, Subtitle } from "../../../components/common";
import SearchBar from "../components/SearchBar";
import { useSearchIssues } from "../hooks/useSearchIssues";
import type { IssueState } from "../hooks/useSearchIssues";
import { useState } from "react";
import IssuesList from "../components/IssuesList";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
min-height: 100vh;
`

const CardHeader = styled.div`
padding: 0 0 8px 0;
`

const IssuesSearchView = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [state, setState] = useState<IssueState>("ALL");
    const { isFetching, issues, isLoading } = useSearchIssues({ searchTerm: searchTerm, state: state })
    const onSearch = (value: string) => {
        setSearchTerm(value);
    }
    return (
        <Container>
            <Card>
                <CardHeader>
                    <SpaceBetween>
                        <Subtitle>React repository issues</Subtitle>
                        <RadioGroup
                            options={[
                                { label: 'All', value: 'ALL' },
                                { label: 'Open', value: 'OPEN' },
                                { label: 'Closed', value: 'CLOSED' }
                            ]}
                            name="Issue state"
                            onChange={(value) => setState(value as IssueState)}
                        />
                        <SearchBar onSearch={onSearch} />
                    </SpaceBetween>
                </CardHeader>
                <Divider />
                {isFetching || isLoading ? <Loader /> : <IssuesList issues={issues} />}
            </Card>
        </Container>
    )
};

export default IssuesSearchView