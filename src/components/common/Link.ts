import styled from "styled-components";

const Link = styled.a`
    color: ${props => props.theme.palette.primary.dark};
    &:visited {
    color: ${props => props.theme.palette.primary.dark};
    }
    &:active {
    color: ${props => props.theme.palette.primary.dark};
    }
    &:hover {
    color: black;
    }
`;

export default Link;