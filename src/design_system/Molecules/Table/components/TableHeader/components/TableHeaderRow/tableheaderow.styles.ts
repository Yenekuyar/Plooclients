import styled from "styled-components";
import { StyledTableRow } from "../../../TableRow/tablerow.styles";

export const TableHeaderRow = styled(StyledTableRow)`
  cursor: default;
  background-color: ${(props) => props.theme.pallete.primary.main2};
  color: ${(props) => props.theme.pallete.primary.text};

  &:hover {
    background-color: ${(props) => props.theme.pallete.primary.main2};
    color: ${(props) => props.theme.pallete.primary.text};
  }

  &:active {
    background-color: ${(props) => props.theme.pallete.primary.main2};
    color: ${(props) => props.theme.pallete.primary.text};
  }
`;
