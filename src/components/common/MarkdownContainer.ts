import styled from "styled-components";

const MarkdownContainer = styled.div`
font-size: 0.8em;
color: rgba(90, 90, 90, 1);
word-break: break-all;
overflow: hidden;

&>blockquote {
font-style: italic;
border: 1px solid ${props => props.theme.palette.border};
padding: 0 8px;
width: fit-content;
border-radius: 4px;
}
&>img {
max-width: 100%;
height: auto;
}
&>pre:has(code) {
padding: 4px;
background-color: rgba(90, 90, 90, 1);
color: white;}
`;

export default MarkdownContainer;