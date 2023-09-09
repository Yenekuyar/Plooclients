import { StyledForm } from "./form.styles";
import { IForm } from "./form.types";

export default function Form(props: IForm) {
  return <StyledForm>{props.children}</StyledForm>;
}
