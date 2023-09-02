import { StyledContainer } from "./container.styles";
import { IContainerProps } from "./container.types";

export default function Container({ children }: IContainerProps) {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}
