import { StyledList } from './list.styles'
import { IList } from './list.types'

export default function List(props: IList) {
  return (
    <StyledList>{props.children}</StyledList>
  )
}
