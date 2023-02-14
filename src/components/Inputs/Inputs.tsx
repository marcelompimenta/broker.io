import styled from "styled-components";
import { IInputComponentProps } from "../../types/InputComponentTypes";
import { Container } from "../Container/Container";

export const Input = styled.input<IInputComponentProps>`
  width: ${({ width }) => `${width ? String(width).concat('rem') : 'auto'}`};
  min-width: 18.75rem;
  max-width: fit-content;
  padding: .5rem;
  border-radius: .25rem;
  border: .0625rem solid ${({ theme }) => theme.primary.border};
  appearance: none;
  background-color: ${({ theme }) => theme.primary.contrast};

  ::placeholder {
    color: ${({ theme }) => theme.primary.text};
    opacity: .7;   
  }
  
`

export const InputComponent = (
  props: IInputComponentProps
) => {
  return (
    <Container className="containerInput" horizontalDirection="center">
      <Container className="container" verticalDirection="column" gap={.5}>
        <label htmlFor="input">{props?.label}</label>
        <Input
          type={props?.type ?? ''}
          width={props?.width}
          placeholder={props?.place ?? ''} />
      </Container>
    </Container>
  )
}