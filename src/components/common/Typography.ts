import styled from "styled-components";

const Typography = styled.p<{ $variant?: 'body' | 'body2', $fontSize?: 'normal' | 'large' | 'small' }>`
margin-bottom: 0;
margin-top: 0;
font-size: ${props => {
    switch(props.$fontSize) {
        case 'large':
            return '1.2em';
        case 'normal':
            return '1em';
        case 'small':
            return '0.8em';
        default:
            return '1em';
    }
   }};
color: ${props => props.$variant !== 'body2' ? 'black' : 'rgba(90, 90, 90, 1)'};
text-decoration: none;

`;

export default Typography;