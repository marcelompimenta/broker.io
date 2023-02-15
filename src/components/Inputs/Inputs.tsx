import styled from "styled-components";
import { IInputComponentProps } from "../../types/InputComponentTypes";
import { Container } from "../Container/Container";

export const Input = styled.input<IInputComponentProps>`
  width: ${({ width }) => `${width ? String(width).concat('rem') : 'auto'}`};
  min-width: 18.75rem;
  padding: .5rem;
  border-radius: .25rem;
  border: .0625rem solid ${({ theme }) => theme.primary.border};
  appearance: none;
  background-color: ${({ theme }) => theme.primary.contrast};
  color: ${({colorText}) => colorText};

  ::placeholder {
    color: ${({ theme }) => theme.primary.text};
    opacity: .7;   
  }
  
`
export const InputComponent = ({
  label, type, width, place, colorText
}: IInputComponentProps) => {
  return (
    <Container className="containerInput" horizontalDirection="center">
      <Container className="container" verticalDirection="column" gap={.5}>
        <label htmlFor="input">{label}</label>
        <Input colorText={colorText} type={type ?? ''} width={width} placeholder={place ?? ''} />
      </Container>
    </Container>
  )
}