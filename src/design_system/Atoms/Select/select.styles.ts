import styled from "styled-components";

export const StyledSelect = styled.select`
  appearance: none;
  background-color: ${(props) => props.theme.pallete.primary.main};
  color: ${(props) => props.theme.pallete.primary.white};
  border: 2px solid ${(props) => props.theme.pallete.primary.white};
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  width: 60%;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.pallete.primary.white};
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;