import { StyledInput } from "./input.styles"
import { IInputProps } from "./input.types"

export default function Input(props: IInputProps) {
  return (
    <StyledInput
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
    />
  )
}