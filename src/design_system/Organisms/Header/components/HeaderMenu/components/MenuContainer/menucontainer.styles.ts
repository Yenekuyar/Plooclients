import styled from 'styled-components';
import { StyledContainer } from '../../../../../../Atoms/Container/container.styles';
import { ItemContainer } from './components/ItemContainer/itemcontainer.styles';

export const MenuContainer = styled(StyledContainer)`
  position: relative;
  display: inline-block;
  height: 100%;
  margin: 0;
  padding: 0;

  &:hover ${ItemContainer} {
    display: block;
  }
`