import styled from 'styled-components';

const IconButton = styled.button.attrs({
    type: 'button',
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: none;
  border-radius: 100%;
  background: transparent;
  cursor: pointer;
  transition: background 0.2s ease;
  color: black;

  &:hover {
    background: ${props => props.theme.palette.secondary.light};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default IconButton;