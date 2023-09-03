import { StyledTable } from "./table.styles";
import { ITable } from "./table.types";

export default function Table(props: ITable) {
  return (
    <StyledTable
      cellSpacing={props.cellspacing}
    >
      {props.children}
    </StyledTable>
  )
}
