import { StyledButton } from "./button.styles"
import { IButtonProps } from "./button.types"

export default function Button({ type, children }: IButtonProps) {
  return (
    <StyledButton type={type}>
      {children}
    </StyledButton>
  )
}