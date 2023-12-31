import Image from "../../Atoms/Image/image.view";
import ToggleButton from "../../Molecules/ToggleButton/toggleButton.view";
import HeaderMenu from "./components/HeaderMenu/headermenu.view";
import { StyledHeader } from "./header.styles";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderMenu />
      <h1>Plooclients</h1>
      <ToggleButton />
      <Image
        alt={"Logo da Ploomes"}
        image={"/icons/ploomes-icone-branco.svg"}
        width={"42px"}
      />
    </StyledHeader>
  );
}