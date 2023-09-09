import { StyledListItem } from "./listitem.styles";
import { IListItem } from "./listitem.types";

export default function ListItem(props: IListItem) {
  return <StyledListItem>{props.children}</StyledListItem>;
}