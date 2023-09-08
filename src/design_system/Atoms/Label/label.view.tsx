import { StyledLabel } from "./label.styles";
import { ILabelProps } from "./label.types";

export default function Label({ children }: ILabelProps) {
  return <StyledLabel>{children}</StyledLabel>;
}
