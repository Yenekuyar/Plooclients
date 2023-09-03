import { StyledTableHeader } from './tableheader.styles'
import { ITableHeader } from './tableheader.types'

export function TableHeader(props: ITableHeader) {
  return (
    <StyledTableHeader>{props.children}</StyledTableHeader>
  )
}
