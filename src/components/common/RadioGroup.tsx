import styled from 'styled-components';

const RadioGroupContainer = styled.div.attrs({
  role: 'radiogroup',
})`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #333;
`;

const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;`;

const CustomRadio = styled.span`
  width: 15px;
  height: 15px;
  border: 2px solid #555;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;

  ${RadioLabel}:focus-within & {
    outline: 2px solid black;
    outline-offset: 2px;
  }

  ${HiddenRadio}:checked + &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 7px;
    height: 7px;
    background: #555;
    border-radius: 50%;
  }
`;

interface RadioGroupProps {
  options: { label: string, value: string }[];
  selected: string;
  name: string;
  onChange: (value: string) => void;
}
export const RadioGroup = ({ options, name, onChange, selected }: RadioGroupProps) => {

  const handleChange = (e: { target: { value: string; }; }) => {
    onChange?.(e.target.value);
  };

  return (
    <RadioGroupContainer>
      {options.map((option) => (
        <RadioLabel key={option.value}>
          <HiddenRadio
            id={`${name}-${option.value}`}
            aria-label={option.label}
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={handleChange}
          />
          <CustomRadio aria-hidden="true" />
          {option.label}
        </RadioLabel>
      ))}
    </RadioGroupContainer>
  );
};