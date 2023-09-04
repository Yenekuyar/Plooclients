import styled from 'styled-components';
import { StyledTableRow } from '../../../TableRow/tablerow.styles';

export const TableHeaderRow = styled(StyledTableRow)`
  &:hover {
    background-color: ${props => props.theme.pallete.primary.dark};
  }

  &:active {
    transition: 0.1s;
    background-color: ${props => props.theme.pallete.primary.dark};
  }
`