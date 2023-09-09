import styled from "styled-components";
import { StyledButton } from "../../../../../../../../Atoms/Button/button.styles";

export const MenuItemButton = styled(StyledButton)`
  width: 100%;
  border-radius: 0;
  background-color: ${(props) => props.theme.pallete.primary.main};
  color: ${(props) => props.theme.pallete.primary.white};
  text-decoration: none;
  font-size: 16px;
  padding: 4px;

  &:hover {
    color: ${(props) => props.theme.pallete.primary.white};
    border: 2px solid ${(props) => props.theme.pallete.primary.white};
  }

  &:active {
    background-color: ${(props) => props.theme.pallete.primary.white};
    color: ${(props) => props.theme.pallete.primary.main};
  }

  .menu-item-link {
    text-decoration: none;
    color: ${(props) => props.theme.pallete.primary.white};
    margin-top: 20px;
  }
`;
