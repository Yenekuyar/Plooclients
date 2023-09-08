import { MenuButton } from "./components/MenuButton/menubutton.styles";
import { MenuContainer } from "./components/MenuContainer/menucontainer.styles";
import { MenuItemButton } from "./components/MenuContainer/components/MenuItemButton/menuitembutton";
import { MenuItemContainer } from "./components/MenuContainer/components/MenuItemContainer/menuitemcontainer.styles";
import { Link, useNavigate } from "react-router-dom";

export default function HeaderMenu() {
  const navigate = useNavigate();

  function handleExit() {
    localStorage.removeItem("userkey");

    navigate("/");
  }

  return (
    <MenuContainer>
      <MenuButton />
      <MenuItemContainer>
        <MenuItemButton>Action</MenuItemButton>
        <MenuItemButton>Another action</MenuItemButton>
        <MenuItemButton onClick={handleExit}>Sair</MenuItemButton>
      </MenuItemContainer>
    </MenuContainer>
  );
}
