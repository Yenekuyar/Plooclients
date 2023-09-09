import styled from "styled-components";
import { StyledTableRow } from "../../../TableRow/tablerow.styles";

export const TableHeaderRow = styled(StyledTableRow)`
  cursor: default;
  background-color: ${(props) => props.theme.pallete.primary.main};
  color: ${(props) => props.theme.pallete.primary.white};

  &:hover {
    background-color: ${(props) => props.theme.pallete.primary.main};
    color: ${(props) => props.theme.pallete.primary.white};
  }

  &:active {
    background-color: ${(props) => props.theme.pallete.primary.main};
    color: ${(props) => props.theme.pallete.primary.white};
  }
`;