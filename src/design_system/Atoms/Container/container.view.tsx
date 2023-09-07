import { StyledContainer } from "./container.styles";
import { IContainerProps } from "./container.types";

export default function Container(props: IContainerProps) {
  return (
    <StyledContainer 
      display={props.display}
      justifyContent={props.justifyContent}
      flexDirection={props.flexDirection}
      alignItems={props.alignItems}
      width={props.width}
      flexWrap={props.flexWrap}
      flexBasis={props.flexBasis}
      maxHeight={props.maxHeight}
      overflow={props.overflow}   
      backgroundColor={props.backgroundColor}
      >
        {props.children}
    </StyledContainer>
  )
}
