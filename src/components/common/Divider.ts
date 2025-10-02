import styled from "styled-components";

const Divider = styled.div`
width: 100%;
height: 1px;
margin: 8px 0;
background-color: ${props => props.theme.palette.border}
`;

export default Divider