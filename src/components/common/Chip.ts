import styled from "styled-components";

const Chip = styled.span<{color: 'PRIMARY' | 'SECONDARY'}>`
border: 1px solid ${props => props.color === 'PRIMARY' ? props.theme.palette.primary.main : props.theme.palette.secondary.main};
background: ${props => props.color === 'PRIMARY' ? props.theme.palette.primary.light : props.theme.palette.secondary.light};
border-radius: 4px;
padding: 2px 4px;
font-size: 0.8em;
color: black;
margin: 0 4px;
color: ${props => props.color === 'PRIMARY' ? props.theme.palette.primary.dark : props.theme.palette.secondary.dark};
`;

export default Chip;