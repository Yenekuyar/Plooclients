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
      overflowY={props.overflowY}
      overflowX={props.overflowX}
      backgroundColor={props.backgroundColor}
      position={props.position}
      top={props.top}
      left={props.left}
    >
      {props.children}
    </StyledContainer>
  );
}