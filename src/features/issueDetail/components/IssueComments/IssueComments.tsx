import { Typography, List, Card, Divider, Button, MarkdownContainer } from "../../../../components/common";
import type { Comment, CommentsPageInfo } from "../../hooks/useGetIssueDetails";
import styled from "styled-components";
import rehypeHighlight from "rehype-highlight";
import ReactMarkdown from 'react-markdown';
import { formatDate } from "../../helpers/issueDetailsHelpers";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const CommentTitle = styled.div`
width: 100%;
`

const CardContainer = styled.div`
padding: 8px 0;
`

const CenterContent = styled.div`
width: 100%;
display: flex; 
justify-content: center;
text-align: center;
`

interface IssueCommentsProps {
    comments?: {
        nodes: Comment[];
        pageInfo: CommentsPageInfo;
    } | null;
    fetchMoreComments: () => Promise<void>;
    isFetching: boolean;
    errorLoading: Error | null;
}

const IssueComments = ({ comments, fetchMoreComments, isFetching, errorLoading }: IssueCommentsProps) => {
    if (!comments?.nodes?.length) return <Typography>There aren't any comments yet</Typography>;
    return <>
        <List>
            {comments.nodes.map((comment, index) => <CardContainer key={index}>
                <Card>
                    <CommentTitle>
                        <Typography>{comment.author?.login}</Typography>
                        <Typography $variant="body2" $fontSize="small">{formatDate(comment.createdAt)}</Typography>
                    </CommentTitle>
                    <Divider />
                    <MarkdownContainer>
                        <ReactMarkdown
                            rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize, remarkGfm]}
                        >
                            {comment.body}
                        </ReactMarkdown>
                    </MarkdownContainer>
                </Card>
            </CardContainer>)}
        </List>
        {comments.pageInfo?.hasNextPage && (
            <CenterContent>
                <Button disabled={isFetching} onClick={() => fetchMoreComments()}>Load more</Button>
            </CenterContent>
        )}
        {errorLoading && (
            <CenterContent>
                <Typography $variant="body2" $fontSize="small">There has been an error while loading more comments, try again later</Typography>
            </CenterContent>
        )}
    </>
};

export default IssueComments;