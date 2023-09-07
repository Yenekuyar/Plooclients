import Text from "../../../../design_system/Atoms/Text/text.view";
import Form from "../../../../design_system/Organisms/Form/form.view";
import Label from "../../../../design_system/Atoms/Label/label.view";
import Button from "../../../../design_system/Atoms/Button/button.view";
import Container from "../../../../design_system/Atoms/Container/container.view";
import { useNavigate, useParams } from "react-router-dom";
import { getClientModal } from "./services/getClientModal";
import { useEffect, useState } from "react";
import { IPlooClients } from "../../clients.types";
import { formatCpf } from "../../../../constants/convertCpf";
import { formatCnpj } from "../../../../constants/convertCnpj";
import { StyledButton } from "../../../../design_system/Atoms/Button/button.styles";

export default function ClientModal() {
  const [selectedClient, setSelectedClient] = useState<IPlooClients[]>([]);
  const [clientUpdater, setClientUpdater] = useState<number>(0);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const client = useParams();
  const clientId = client.id;
  const validateUserkey = localStorage.getItem("userkey");

  const navigate = useNavigate();

  useEffect(() => {
    if (validateUserkey !== null) {
      getClientModal(
        `Contacts?$filter=Id eq ${clientId}&$expand=Phones, OtherProperties`,
        validateUserkey || ""
      ).then((data) => {
        setSelectedClient(data.value);
      });
    } else {
      navigate("");
    }
  }, [clientUpdater]);

  function handleUpdateClick() {
    setClientUpdater(clientUpdater + 1);
  }

  return (
    <Container overflow="scroll" maxHeight="90%">
      <Container
        display="flex"
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
        width="100%"
        alignItems="center"
      >
        <Form>
          <Container
            display="flex"
            justifyContent="center"
            flexDirection="row"
            flexWrap="wrap"
            width="100%"
            alignItems="center"
          >
            {selectedClient.map((client) => {
              return (
                <>
                  <Container flexBasis="40%">
                    <Label>Nome</Label>
                    <Text contentEditable>{client.Name}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Tipo do Cliente</Label>
                    <Text>{client.TypeId == 1 ? "Empresa" : "Pessoa"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Id</Label>
                    <Text>{client.Id}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Email</Label>
                    <Text>{client.Email || "-"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Telefone</Label>
                    <Text>
                      {client.Phones && client.Phones.length > 0
                        ? client.Phones[0].PhoneNumber
                        : "-"}
                    </Text>
                  </Container>
                  {client.CNPJ ? (
                    <Container flexBasis="40%">
                      <Label>CNPJ</Label>
                      <Text contentEditable>{formatCnpj(client.CNPJ || "-") || "-"}</Text>
                    </Container>
                  ) : (
                    <Container flexBasis="40%">
                      <Label>CPF</Label>
                      <Text>{formatCpf(client.CPF || "-") || "-"}</Text>
                    </Container>
                  )}
                  <Container flexBasis="40%">
                    <Label>Bairro</Label>
                    <Text>{client.Neighborhood || "-"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Endereço</Label>
                    <Text>{client.StreetAddress || "-"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Número</Label>
                    <Text>{client.StreetAddressNumber || "-"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>CEP</Label>
                    <Text>{client.ZipCode || "-"}</Text>
                  </Container>
                  <Container flexBasis="100%">
                    <Container
                      display="flex"
                      justifyContent="space-around"
                      flexDirection="row"
                      flexWrap="wrap"
                      width="100%"
                      alignItems="center"
                    >
                      <Container flexBasis="20%">
                        <StyledButton
                          width="100%"
                          onClick={handleUpdateClick}
                          type={"button"}
                        >
                          Atualizar
                        </StyledButton>
                      </Container>
                      <Container flexBasis="20%">
                        <Button type={"button"} width="100%">
                          Editar
                        </Button>
                      </Container>
                      <Container flexBasis="20%">
                        <StyledButton 
                          type={"button"} 
                          width="100%"
                        >
                          Deletar
                        </StyledButton>
                      </Container>
                      <Container flexBasis="0%" display="absolute">
                        <StyledButton
                          width="100%"
                          onClick={() => {
                            navigate("/clients");
                          }}
                        >
                          Voltar
                        </StyledButton>
                      </Container>
                    </Container>
                  </Container>
                </>
              );
            })}
          </Container>
        </Form>
      </Container>
    </Container>
  );
}
