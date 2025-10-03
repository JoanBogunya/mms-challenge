import styled from 'styled-components';

const Button = styled.button.attrs({
    type: 'button',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid ${props=> props.theme.palette.secondary.main};
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;
  color: ${props=> props.theme.palette.secondary.main};

  &:hover {
    background: ${props => props.theme.palette.secondary.light};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export default Button;