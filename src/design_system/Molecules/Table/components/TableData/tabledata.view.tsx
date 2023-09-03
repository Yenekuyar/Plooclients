import { StyledTableData } from './tabledata.styles'
import { ITableData } from './tabledata.types'

export default function TableData(props: ITableData) {
  return (
    <StyledTableData>
      {props.children}
    </StyledTableData>
  )
}
