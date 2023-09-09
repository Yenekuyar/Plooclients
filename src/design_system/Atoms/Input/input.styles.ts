import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 4px;
  padding: 8px;
  margin: 4px;
  height: 32px;
  appearance: none;
  overflow-x: auto;
  background-color: ${(props) => props.theme.pallete.primary.secondary};
  color: ${(props) => props.theme.pallete.primary.text};
  width: ${(props) => (props.width ? props.width : "auto")};

  text-align: center;

  &::placeholder {
    color: ${(props) => props.theme.pallete.primary.text};
    opacity: 0.5;
  }

  &:active {
    text-decoration: none;
  }
`;