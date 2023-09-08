import { StyledText } from "./text.styles";
import { ITextProps } from "./text.types";

export default function Text(props: ITextProps) {
  return (
    <StyledText contentEditable={props.contentEditable}>
      {props.children}
    </StyledText>
  );
}
