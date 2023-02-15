import styled from "styled-components";

interface IButtonProps {
  innerText?: string
}

export const Button = styled.button`
  width: 9.75rem;
  height: 2.375rem;
  border-radius: 4px;
  background-color: ${({theme}) => theme.normal};
  border: none;
  color: #fff;
  :hover{
    cursor: pointer;
    opacity: .7;
  }
  :active {
    opacity: .4;
  }
`

export const ButtonComponent = ({ innerText }: IButtonProps) => {
  return (
    <Button>{innerText}</Button>
  )
}