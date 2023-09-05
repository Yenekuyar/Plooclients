import { MenuButton } from "./components/MenuButton/menubutton.styles";
import { MenuContainer } from "./components/MenuContainer/menucontainer.styles";
import { MenuItemButton } from "./components/MenuContainer/components/MenuItemButton/menuitembutton";
import { MenuItemContainer } from "./components/MenuContainer/components/MenuItemContainer/menuitemcontainer.styles";
import { Link } from "react-router-dom";

export default function HeaderMenu() {
  function handleExit() {
    localStorage.removeItem("userkey");
  }

  return (
    <MenuContainer>
      <MenuButton />
      <MenuItemContainer>
        <MenuItemButton>Action</MenuItemButton>
        <MenuItemButton>Another action</MenuItemButton>
        <MenuItemButton onClick={handleExit}>
          <Link to={"/"} className="menu-item-link">
            Sair
          </Link>
        </MenuItemButton>
      </MenuItemContainer>
    </MenuContainer>
  );
}
