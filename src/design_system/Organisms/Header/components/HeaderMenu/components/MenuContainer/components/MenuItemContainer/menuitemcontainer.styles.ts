import styled from 'styled-components';
import { StyledContainer } from '../../../../../../../../Atoms/Container/container.styles';

export const MenuItemContainer = styled(StyledContainer)`
  display: none;
  position: absolute;
  margin: 0;
  padding: 0;
  min-width: 300px;
  background-color: ${props => props.theme.pallete.primary.main};
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;

  &:hover{
    display: block;
  }
`