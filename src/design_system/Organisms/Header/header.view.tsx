import Image from "../../Atoms/Image/image.view";
import { StyledHeader } from "./header.styles";

export default function Header() {
    return (
        <StyledHeader>
            <h1>Plooclients</h1>
            <Image alt={"Logo da Ploomes"} image={"/icons/ploomes-icone-branco.svg"} width={"42px"} />
        </StyledHeader>
    )
}
