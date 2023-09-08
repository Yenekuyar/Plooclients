import styled from "styled-components";

export const StyledSearchBar = styled.input`
  padding-left: 30px;
  background-image: url("icons/buscar.svg");
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: 5px center;
  border: 1px solid ${(props) => props.theme.pallete.primary.text};
  background-color: ${(props) => props.theme.pallete.primary.secondary};
  color: ${(props) => props.theme.pallete.primary.text};
  box-shadow: inset 7px 10px 29px -20px ${(props) => props.theme.pallete.primary.text};
  height: 40px;
  margin: 12px;
  width: 96%;

  &:active {
    border: 1px solid ${(props) => props.theme.pallete.primary.text};
  }

  &::placeholder {
    color: ${(props) => props.theme.pallete.primary.text};
  }
`;
