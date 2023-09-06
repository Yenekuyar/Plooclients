import Container from "../../../../design_system/Atoms/Container/container.view";
import Label from "../../../../design_system/Atoms/Label/label.view";
import { useNavigate, useParams } from "react-router-dom";
import { getClientModal } from "./services/getClientModal";
import { useEffect, useState } from "react";
import { IPlooClients } from "../../clients.types";
import Button from "../../../../design_system/Atoms/Button/button.view";
import Input from "../../../../design_system/Atoms/Input/input.view";

export default function ClientModal() {
  const [selectedClient, setSelectedClient] = useState<IPlooClients[]>([]);

  const client = useParams();
  const clientId = client.id;
  const validateUserkey = localStorage.getItem("userkey");

  const navigate = useNavigate();

  useEffect(() => {
    if (validateUserkey !== null) {
      getClientModal(
        `Contacts?$filter=Id eq ${clientId}&$expand=Phones`,
        validateUserkey || ""
      ).then((data) => {
        setSelectedClient(data.value);
      });
    } else {
      navigate("");
    }
  }, []);

  return (
    <>
      <button
        className="testepralaruda"
        onClick={() => {
          navigate("/clients");
        }}
      >
        Botão
      </button>

      <Container>
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Label>Leibu</Label>
        <Input type={"text"} id={""} width={""} />
        <Container>
          <Button type={"button"}>Enviar Edição</Button>
          <Button type={"button"}>Deletar</Button>
        </Container>
      </Container>
    </>
  );
}
