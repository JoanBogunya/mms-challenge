import { CheckCircle, Circle } from "react-feather"
import { Chip, Typography } from "../../../../components/common"
import List from "../../../../components/common/List"
import ListItem from "../../../../components/common/ListItem"
import type { Issue } from "../../hooks/useSearchIssues"
import styled, { useTheme } from "styled-components"
import { Link } from "react-router-dom"
import type { DeepPartial } from "@apollo/client/utilities"

const IssueRow = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IssuesListProps {
    issues?: (Issue | undefined | DeepPartial<Issue>)[]
}
const IssuesList = ({ issues }: IssuesListProps) => {
    const { palette } = useTheme()
    if (!issues?.length) return <Typography>There are no issues matching the criteria</Typography>;
    return <List>
        {issues.map(issue => issue && (
            <ListItem key={issue.number}>
                <IssueRow>
                    <IconWrapper>
                        {issue.state === 'OPEN' ?
                            <Circle size={20} color={palette.primary.main} />
                            :
                            <CheckCircle size={20} color={palette.secondary.main} />
                        }
                    </IconWrapper>
                    <Link to={`/issue/${issue.number}`}><Typography $variant="body">{issue.title}</Typography></Link>
                </IssueRow>
                {issue.author && (
                    <Typography $variant="body2" $fontSize="small">Created by: {issue.author.login}</Typography>
                )}

                {issue.labels?.nodes?.map((node, index) => node && <Chip
                    key={index}
                    color={node.name?.includes('Type') ? 'SECONDARY' : 'PRIMARY'}>
                    {node.name}
                </Chip>)}
            </ListItem>
        ))}

    </List>
};

export default IssuesList;