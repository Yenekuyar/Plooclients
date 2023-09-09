import styled from "styled-components";
import { StyledInput } from "../../../../Atoms/Input/input.styles";

export const AuthFormInput = styled(StyledInput)`
  width: 70%;
  background-color: ${(props) => props.theme.pallete.primary.main2};
  color: ${(props) => props.theme.pallete.primary.white};

  &::placeholder {
    color: ${(props) => props.theme.pallete.primary.white};
  }
`;