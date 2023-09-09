import styled from "styled-components";
import { StyledButton } from "../../../../Atoms/Button/button.styles";

export const AuthFormButton = styled(StyledButton)`
  width: 25%;
  background-color: ${(props) => props.theme.pallete.primary.main2};
  color: ${(props) => props.theme.pallete.primary.white};
`;