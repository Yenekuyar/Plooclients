import Container from "../../design_system/Atoms/Container/container.view";
import Image from "../../design_system/Atoms/Image/image.view";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Container>
      <Container>
        <h2>
          {" "}
          Página não encontrada... <Link to={"/clients"}>Voltar...</Link>
        </h2>
        <Image
          alt={"Ploo pensando"}
          image={"/images/plupensando.png"}
          width={"40%"}
        />
      </Container>
    </Container>
  );
}
