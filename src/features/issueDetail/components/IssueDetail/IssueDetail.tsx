import styled, { useTheme } from "styled-components"
import type { IssueDetails } from "../../hooks/useGetIssueDetails"
import { Chip, Divider, IconButton, MarkdownContainer, Subtitle, Typography } from "../../../../components/common";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { ArrowLeftCircle, CheckCircle, Circle } from "react-feather";
import { useNavigate } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";

const Container = styled.div`
width: 100%;
overflow: hidden;
`;

const HorizontalItem = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

interface IssueDetailProps {
    issue: IssueDetails | null;
    number: number;
}
const IssueDetail = ({ issue, number }: IssueDetailProps) => {
    const { palette } = useTheme();
    const navigate = useNavigate();
    if (!issue) return <Typography>There has been an error <a href="/">Go back</a></Typography>
    return <Container>
        <HorizontalItem>
            <IconButton onClick={() => navigate(-1)}>
                <ArrowLeftCircle />
            </IconButton>
            <Subtitle>{issue.title || '#' + number}</Subtitle>
            {issue.state === 'OPEN' ?
                <Circle size={20} color={palette.primary.main} />
                :
                <CheckCircle size={20} color={palette.secondary.main} />
            }
        </HorizontalItem>

        {issue.author?.login && (
            <Typography $fontSize="small" $variant="body2">Authored by {issue.author?.login}</Typography>
        )}

        {issue.labels?.nodes?.map((node, index) => node && <Chip
            key={index}
            color={node.name?.includes('Type') ? 'SECONDARY' : 'PRIMARY'}>
            {node.name}
        </Chip>
        )}

        <Divider />

        <MarkdownContainer>
            <ReactMarkdown rehypePlugins={[rehypeHighlight, rehypeRaw, rehypeSanitize, remarkGfm]}>{issue?.body}</ReactMarkdown>
        </MarkdownContainer>
    </Container>
};

export default IssueDetail;