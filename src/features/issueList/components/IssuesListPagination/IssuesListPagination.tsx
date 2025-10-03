import { ArrowLeft, ArrowRight } from "react-feather";
import styled from "styled-components"

const PaginationButton = styled.button<{ disabled?: boolean }>`
cursor: ${props => props.disabled ? 'default' : 'pointer'};
background: transparent;
outline: none;
padding: 6px 10px 8px;
border-radius: ${props => props.theme.borderRadius};
border: 1px solid ${props => props.disabled ? props.theme.palette.border : props.theme.palette.secondary.main};
color: ${props => props.disabled ? props.theme.palette.border : props.theme.palette.secondary.dark};
display: flex;
align-items: center;

&:hover {
  background-color: ${props => props.disabled ? 'transparent' : props.theme.palette.secondary.light};
}
`;
const PaginationContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
gap: 8px;
margin-top: 8px;
`;

interface IssuesListPaginationProps {
    goToNextPage: () => void;
    goToPreviousPage: () => void;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

const IssuesListPagination = ({ goToNextPage, goToPreviousPage, hasNextPage, hasPreviousPage }: IssuesListPaginationProps) => {
    return <PaginationContainer>
        <PaginationButton onClick={() => goToPreviousPage()} disabled={!hasPreviousPage}><ArrowLeft />Previous</PaginationButton>
        <PaginationButton onClick={() => goToNextPage()} disabled={!hasNextPage}>Next<ArrowRight /></PaginationButton>
    </PaginationContainer>
};

export default IssuesListPagination;