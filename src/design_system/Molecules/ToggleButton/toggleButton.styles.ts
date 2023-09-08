import styled from "styled-components";

export const StyledToggleButton = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  background-color: ${(props) => props.theme.pallete.primary.secondary};
  border-radius: 15px;
  cursor: pointer;
`;
