import { StyledContainer } from "./container.styles";
import { IContainerProps } from "./container.types";

export default function Container(props: IContainerProps) {
  return (
    <StyledContainer>
        {props.children}
    </StyledContainer>
  )
}
