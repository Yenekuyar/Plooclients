import { StyledTableRow } from './tablerow.styles'
import { ITableRow } from './tablerow.types'

export default function TableRow(props: ITableRow) {
  return (
    <StyledTableRow>
      {props.children}
    </StyledTableRow>
  )
}
