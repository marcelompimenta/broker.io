import styled from "styled-components";
import { Container } from "../Container/Container";
import { ClipBoard } from "../IconClipBoard/IconClipBoard";

interface ITextAreaProps {
  label?: string
  placeholder?: string
}

export const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.primary.contrast};
  border: none;
  width: 100%;
  height: 10rem;
  padding: .5rem;
  resize: none;
  border-radius: .25rem;
  color: ${({ theme }) => theme.principal};

  ::placeholder {
    color: ${({ theme }) => theme.primary.text};
    opacity: .7;
  }
`

export const TextAreaComponent = ({
  label, placeholder
}: ITextAreaProps) => {
  return (
    <Container verticalDirection="column" gap={.5}>
      <label htmlFor="textarea">{label}</label>
      <Container border bgColor verticalDirection="column" horizontalDirection="end" radius={.25} gap={.5} padding={1}>
        <TextArea placeholder={placeholder} />
        <Container horizontalDirection="center" justify="end" gap={.5}>
          <span>copiar</span>
          <ClipBoard width="24" height="24" />
        </Container>
      </Container>
    </Container>
  )
}