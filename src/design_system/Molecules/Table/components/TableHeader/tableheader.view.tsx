import { StyledTableHeader } from './tableheader.styles'
import { ITableHeader } from './tableheader.types'

export default function TableHeader(props: ITableHeader) {
  return (
    <StyledTableHeader>
      {props.children}
    </StyledTableHeader>
  )
}
