interface IInputsProps {
  width?: number
}

export interface IInputComponentProps extends IInputsProps {
  label?: string | null
  type?: string | null
  place?: string | null
  colorText?: string
}