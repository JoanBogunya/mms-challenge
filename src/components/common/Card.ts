import styled from "styled-components";

const Card = styled.div`
padding: 16px;
border: 1px solid ${props => props.theme.palette.border};
border-radius: ${props => props.theme.borderRadius};
background-color: white;
box-sizing: border-box;
width: 100%;
`;

export default Card;