import styled from "styled-components";

export const StyledOption = styled.option`
  background-color: ${(props) => props.theme.pallete.primary.main};
  color: ${(props) => props.theme.pallete.primary.white};
  font-size: 14px;
  padding: 10px 10px;
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.pallete.primary.white};
    color: ${(props) => props.theme.pallete.primary.main};
  }

  &:checked {
    background-color: ${(props) => props.theme.pallete.primary.white};
    color: ${(props) => props.theme.pallete.primary.main};
  }
`;