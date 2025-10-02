import styled from "styled-components"
import { Card, Link, Typography } from "../components/common"

const PageContainer = styled.div`
width: 100%;
height: 100%;
align-items: center;
display: flex;
justify-content: center;
`
const CardContainer = styled.div`
width: 500px;
margin-top: 48px;
`
const CardContent = styled.div`
padding: 24px;
text-align: center;
`

const NotFound = () => {
    return <PageContainer>
        <CardContainer>
            <Card>
                <CardContent>
                    <Typography>Looks like this page does not exist</Typography>
                    <Link href="/">Go back</Link>
                </CardContent>
            </Card>
        </CardContainer>
    </PageContainer>
};

export default NotFound;