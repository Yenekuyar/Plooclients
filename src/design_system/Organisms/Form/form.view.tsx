import { StyledForm } from "./form.styles";
import { IFormProps } from "./form.types";

export default function Form(props: IFormProps) {
  return <StyledForm>{props.children}</StyledForm>;
}
