import styled from "styled-components";

const ListItem = styled.li`
margin: 0;
padding: 8px;
border-bottom: 1px solid ${props => props.theme.palette.border};
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 4px;
&>:last-of-kind {
border-bottom: 0;
}
`;
export default ListItem;