import styled from "styled-components";
import { ISButtonProps } from "./button.types";

export const StyledButton = styled.button<ISButtonProps>`
  outline: none;
  cursor: pointer;
  height: 48px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.theme.pallete.primary.main};
  background-image: ${props => props.bgImage};
  background-repeat: no-repeat;
  color: ${props => props.theme.pallete.primary.secondary};
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: ${(props) => props.theme.pallete.primary.main2};
    color: ${props => props.theme.pallete.primary.secondary};
  }

  &:active {
    background-color: ${props => props.theme.pallete.primary.secondary};
    color: ${props => props.theme.pallete.primary.main};
    border: 2px solid ${props => props.theme.pallete.primary.main};
    transition: 0.1s;
  }
`;
