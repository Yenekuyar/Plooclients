import { MenuButton } from "./components/MenuButton/menubutton.styles";
import { ItemContainer } from "./components/MenuContainer/components/ItemContainer/itemcontainer.styles";
import { MenuContainer } from "./components/MenuContainer/menucontainer.styles";

export default function HeaderMenu() {
  return (
    <MenuContainer>
      <MenuButton>
          
      </MenuButton>
      <ItemContainer>
          <MenuButton>Action</MenuButton>
          <MenuButton>Another action</MenuButton>
          <MenuButton>Something else here</MenuButton>
      </ItemContainer>
    </MenuContainer>
  )
}
