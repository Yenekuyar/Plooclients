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

  function handleClientPath() {
    navigate("/clients");
  }

  function handleCreateClientPath() {
    navigate("create");
  }

  return (
    <MenuContainer>
      <MenuButton />
      <MenuItemContainer>
        <MenuItemButton onClick={handleClientPath}>
          Lista de Clientes
        </MenuItemButton>
        <MenuItemButton onClick={handleCreateClientPath}>
          Criar Cliente
        </MenuItemButton>
        <MenuItemButton onClick={handleExit}>Sair</MenuItemButton>
      </MenuItemContainer>
    </MenuContainer>
  );
}
