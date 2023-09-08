import styled from "styled-components";
import { StyledButton } from "../../../../../../../../Atoms/Button/button.styles";

export const MenuItemButton = styled(StyledButton)`
  width: 100%;
  border-radius: 0;
  background-color: ${(props) => props.theme.pallete.primary.main};
  text-decoration: none;
  font-size: 16px;
  padding: 4px;

  &:hover {
    box-shadow: inset 9px 1px 32px -1px rgba(0, 0, 0, 0.75);
  }

  .menu-item-link {
    text-decoration: none;
    color: ${(props) => props.theme.pallete.primary.text};
    margin-top: 20px;
  }
`;
