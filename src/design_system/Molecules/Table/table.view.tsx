import { StyledTable } from "./table.styles";
import { ITable } from "./table.types";

export default function Table(props: ITable) {
  return (
    <StyledTable>
      {props.children}
    </StyledTable>
  )
}
