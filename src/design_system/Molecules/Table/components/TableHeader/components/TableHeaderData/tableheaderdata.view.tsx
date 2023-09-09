import { StyledTableHeaderData } from "./tableheaderdata.styles";
import { ITableHeaderData } from "./tableheaderdata.types";

export default function TableHeaderData(props: ITableHeaderData) {
  return <StyledTableHeaderData>{props.children}</StyledTableHeaderData>;
}