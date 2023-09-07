import { StyledButton } from "./button.styles";
import { IButtonProps } from "./button.types";

export default function Button(props: IButtonProps) {
  return (
    <StyledButton 
      type={props.type} 
      width={props.width} 
      bgImage={props.bgImage}
    >
      {props.children}
    </StyledButton>
  );
}
