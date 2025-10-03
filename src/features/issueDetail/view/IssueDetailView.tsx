import styled from "styled-components";
import { Card, Divider, Loader, Typography } from "../../../components/common";
import { useGetIssueDetails } from "../hooks/useGetIssueDetails";
import { useParams } from "react-router-dom";
import IssueDetail from "../components/IssueDetail/IssueDetail";
import IssueComments from "../components/IssueComments/IssueComments";

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
min-height: 100vh;
padding: 24px;
box-sizing: border-box;
`

const IssueDetailView = () => {
    const pathParams = useParams();
    const {
        issue,
        error,
        isLoading,
        fetchMoreComments,
        isFetching,
        fetchMoreError
    } = useGetIssueDetails({
        issueNumber: Number(pathParams?.id),
        skip: !Number(pathParams?.id)
    })

    if (error) {
        //ideally we would implement this in another way, but i did it like this due to time constraints
        console.error(error.message);
        return <Container>
            <Card>
                <Typography>The following error has occured, <a href="/">Go back</a></Typography>
                <Typography $variant="body2" $fontSize="small">{error.message}</Typography>
            </Card>
        </Container>
    }
    return (
        <Container>
            <Card>
                {isLoading ?
                    <Loader /> :
                    <IssueDetail
                        number={Number(pathParams.id)}
                        issue={issue} />}
                {(issue && !isLoading) && (
                    <>
                        <Divider />
                        <IssueComments
                            comments={issue.comments}
                            fetchMoreComments={fetchMoreComments}
                            isFetching={isFetching}
                            errorLoading={fetchMoreError}
                        />
                    </>
                )}
            </Card>
        </Container>
    )
};

export default IssueDetailView