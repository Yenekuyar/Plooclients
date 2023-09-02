import Container from "../../design_system/Atoms/Container/container.view";
import Input from "../../design_system/Atoms/Input/input.view";
import Label from "../../design_system/Atoms/Label/label.view";

export default function Home() {
  return (
    <>
      <Container>
          <Label>Para acessar a página preencha com uma Userkey válida de um Usuário de Integração</Label>   
          <Input
            type={""}
            placeholder={"Insira sua User-Key aqui..."}
            id={"userkey"}
          />
      </Container>
    </>
  )
}
