import { StyledTableRow } from "./tablerow.styles";
import { ITableRow } from "./tablerow.types";

export default function TableRow(props: ITableRow) {
  return <StyledTableRow role="button">{props.children}</StyledTableRow>;
}