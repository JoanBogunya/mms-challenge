import { CheckCircle, Circle } from "react-feather"
import { Chip, Typography } from "../../../../components/common"
import List from "../../../../components/common/List"
import ListItem from "../../../../components/common/ListItem"
import type { Issue } from "../../hooks/useSearchIssues"
import { useTheme } from "styled-components"
import { Link } from "react-router-dom"
import type { DeepPartial } from "@apollo/client/utilities"

interface IssuesListProps {
    issues?: (Issue | undefined | DeepPartial<Issue>)[]
}
const IssuesList = ({ issues }: IssuesListProps) => {
    const { palette } = useTheme()
    if (!issues?.length) return <Typography>There are no issues matching the criteria</Typography>;
    return <List>
        {issues.map(issue => issue && (
            <ListItem key={issue.number}>
                {issue.state === 'OPEN' ?
                    <Circle size={20} color={palette.primary.main} />
                    :
                    <CheckCircle size={20} color={palette.secondary.main} />
                }
                <div>
                    <Link to={`/issue/${issue.number}`}><Typography $variant="body">{issue.title}</Typography></Link>
                    {issue.author && (
                        <Typography $variant="body2" $fontSize="small">Created by: {issue.author.login}</Typography>
                    )}
                </div>
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