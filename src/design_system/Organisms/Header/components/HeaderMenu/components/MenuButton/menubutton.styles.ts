import styled from 'styled-components';
import { StyledButton } from '../../../../../../Atoms/Button/button.styles';

export const MenuButton = styled(StyledButton)`
  padding: 12px 16px;
  margin: 0;
  height: 100%;
  width: 100px;
  max-width: 100px;
  border-radius: 0;
  text-decoration: none;
  display: block;
  background-image: url('/icons/menu-icon.png');
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${props => props.theme.pallete.primary.main};
`