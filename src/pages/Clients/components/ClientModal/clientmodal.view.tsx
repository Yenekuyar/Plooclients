import Text from "../../../../design_system/Atoms/Text/text.view";
import Form from "../../../../design_system/Organisms/Form/form.view";
import Label from "../../../../design_system/Atoms/Label/label.view";
import Container from "../../../../design_system/Atoms/Container/container.view";
import { useNavigate, useParams } from "react-router-dom";
import { getClientModal } from "./services/getClientModal";
import { useEffect, useState } from "react";
import { IPlooClients } from "../../clients.types";
import { formatCpf } from "../../../../constants/convertCpf";
import { formatCnpj } from "../../../../constants/convertCnpj";
import { StyledButton } from "../../../../design_system/Atoms/Button/button.styles";
import { StyledInput } from "../../../../design_system/Atoms/Input/input.styles";
import { patchClient } from "./services/patchClientModal";
import { DeleteForm } from "../../../../design_system/Molecules/DeleteForm/deleteForm.styles";
import { deleteClient } from "./services/deleteClientModal";

export default function ClientModal() {
  const [selectedClient, setSelectedClient] = useState<IPlooClients[]>([]);
  const [clientUpdater, setClientUpdater] = useState<number>(0);
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientCpf, setClientCpf] = useState<string>("");
  const [clientCnpj, setClientCnpj] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientZipCode, setClientZipCode] = useState<string>("");
  const [clientStreetAddress, setClientStreetAddress] = useState<string>("");
  const [clientStreetAddressNumber, setClientStreetAddressNumber] = useState<string>("");
  const [clientNeighborhood, setClientNeighborhood] = useState<string>("");
  const [editableFieldsToggle, setEditableFieldsToggle] = useState<boolean>(false);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);

  const client = useParams();
  const clientId = client.id;
  const validateUserkey = localStorage.getItem("userkey");

  const navigate = useNavigate();

  useEffect(() => {
    if (!validateUserkey) navigate("/");
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
    setSelectedClient([]);
    setClientUpdater(clientUpdater + 1);
  }

  function handleEditClick() {
    setClientName(selectedClient[0].Name || "");
    setClientEmail(selectedClient[0].Email || "");
    setClientPhone(selectedClient[0].Phones?.[0].PhoneNumber || "");
    setClientCnpj(selectedClient[0].CNPJ || "");
    setClientCpf(selectedClient[0].CPF || "");
    setClientNeighborhood(selectedClient[0].Neighborhood || "");
    setClientStreetAddress(selectedClient[0].StreetAddress || "");
    setClientStreetAddressNumber(selectedClient[0].StreetAddressNumber || "");
    setClientZipCode(selectedClient[0].ZipCode || "");

    if (!editableFieldsToggle) {
      setEditableFieldsToggle(true);
    } else {
      setEditableFieldsToggle(false);
    }
  }

  const handleCancelEditClick = () => {
    setEditableFieldsToggle(false);
    handleUpdateClick();
  };

  const handleNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
  };

  const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientEmail(e.target.value);
  };

  const handleCpfInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientCpf(e.target.value);
  };

  const handleCnpjInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientCnpj(e.target.value);
  };

  const handlePhoneInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientPhone(e.target.value);
  };

  const handleNeighborhoodInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClientNeighborhood(e.target.value);
  };

  const handleStreetAddressInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClientStreetAddress(e.target.value);
  };

  const handleStreetAddressNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setClientStreetAddressNumber(e.target.value);
  };

  const handleZipcodeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientZipCode(e.target.value);
  };

  const handleSubmitChanges = () => {
    const body = {
      Name: clientName,
      Email: clientEmail,
      Register: clientCpf || clientCnpj,
      StreetAddress: clientStreetAddress,
      StreetAddressNumber: clientStreetAddressNumber,
      Neighborhood: clientNeighborhood,
      ZipCode: clientZipCode,
      Phones: [
        {
          PhoneNumber: clientPhone || "",
        },
      ],
    };

    patchClient(
      `Contacts(${clientId})?$expand=Phones`,
      validateUserkey || "",
      body
    ).then(() => {
      setClientUpdater(clientUpdater + 1);
    });

    setEditableFieldsToggle(false);
  };

  const handleDelete = () => {
    deleteClient(`Contacts(${clientId})`, validateUserkey || "");
    navigate("/clients");
  };

  function handleDeleteClick() {
    setShowConfirmation(true);
  }

  function handleCancelDeleteClick() {
    setShowConfirmation(false);
  }

  return (
    <Container overflowY="scroll" overflowX="hidden" maxHeight="90%">
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
                    <Label>Tipo do Cliente</Label>
                    <Text>{client.TypeId == 1 ? "Empresa" : "Pessoa"}</Text>
                  </Container>
                  <Container flexBasis="40%">
                    <Label>Id</Label>
                    <Text>{client.Id}</Text>
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Nome</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.Name}</Text>
                    ) : (
                      <StyledInput
                        placeholder={client.Name || "-"}
                        value={clientName}
                        onChange={handleNameInputChange}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Email</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.Email || "-"}</Text>
                    ) : (
                      <StyledInput
                        placeholder={client.Email || "-"}
                        value={clientEmail || client.Email}
                        onChange={handleEmailInputChange}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Telefone</Label>
                    {!editableFieldsToggle ? (
                      <Text>
                        {client.Phones && client.Phones.length > 0
                          ? client.Phones[0].PhoneNumber
                          : "-"}
                      </Text>
                    ) : (
                      <StyledInput
                        placeholder={
                          client.Phones && client.Phones.length > 0
                            ? client.Phones[0].PhoneNumber
                            : "-"
                        }
                        value={clientPhone}
                        onChange={handlePhoneInputChange}
                        type={"text"}
                        id={""}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  {client.TypeId == 1 ? (
                    <Container
                      flexBasis="40%"
                      display="flex"
                      justifyContent="space-around"
                      flexDirection="column"
                      flexWrap="wrap"
                      width="100%"
                      alignItems="center"
                    >
                      <Label>CNPJ</Label>
                      {!editableFieldsToggle ? (
                        <Text>{formatCnpj(client.CNPJ || "-") || "-"}</Text>
                      ) : (
                        <StyledInput
                          placeholder={formatCnpj(client.CNPJ || "-") || "-"}
                          value={clientCnpj || client.CNPJ}
                          onChange={handleCnpjInputChange}
                          type={"text"}
                          width={"200px"}
                        />
                      )}
                    </Container>
                  ) : (
                    <Container
                      flexBasis="40%"
                      display="flex"
                      justifyContent="space-around"
                      flexDirection="column"
                      flexWrap="wrap"
                      width="100%"
                      alignItems="center"
                    >
                      <Label>CPF</Label>
                      {!editableFieldsToggle ? (
                        <Text>{formatCpf(client.CPF || "-") || "-"} </Text>
                      ) : (
                        <StyledInput
                          placeholder={formatCpf(client.CPF || "-")}
                          value={clientCpf || client.CPF}
                          onChange={handleCpfInputChange}
                          type={"text"}
                          width={"200px"}
                        />
                      )}
                    </Container>
                  )}
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Bairro</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.Neighborhood || "-"}</Text>
                    ) : (
                      <StyledInput
                        placeholder={client.Neighborhood || "-"}
                        value={clientNeighborhood || client.Neighborhood}
                        onChange={handleNeighborhoodInputChange}
                        type={"text"}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Endereço</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.StreetAddress || "-"}</Text>
                    ) : (
                      <StyledInput
                        placeholder={client.StreetAddress || "-"}
                        value={clientStreetAddress || client.StreetAddress}
                        onChange={handleStreetAddressInputChange}
                        type={"text"}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>Número</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.StreetAddressNumber || "-"}</Text>
                    ) : (
                      <StyledInput
                        placeholder={client.StreetAddressNumber || "-"}
                        value={
                          clientStreetAddressNumber ||
                          client.StreetAddressNumber
                        }
                        onChange={handleStreetAddressNumberInputChange}
                        type={"text"}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container
                    flexBasis="40%"
                    display="flex"
                    justifyContent="space-around"
                    flexDirection="column"
                    flexWrap="wrap"
                    width="100%"
                    alignItems="center"
                  >
                    <Label>CEP</Label>
                    {!editableFieldsToggle ? (
                      <Text>{client.ZipCode || "-"}</Text>
                    ) : (
                      <StyledInput
                        placeholder={`${client.ZipCode || "-"}`}
                        value={clientZipCode || client.ZipCode}
                        type="number"
                        onChange={handleZipcodeInputChange}
                        width={"200px"}
                      />
                    )}
                  </Container>
                  <Container flexBasis="100%">
                    {!editableFieldsToggle ? (
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
                          <StyledButton
                            onClick={handleEditClick}
                            type={"button"}
                            width="100%"
                          >
                            Editar
                          </StyledButton>
                        </Container>
                        <Container flexBasis="20%">
                          <StyledButton
                            onClick={handleDeleteClick}
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
                    ) : (
                      <Container
                        display="flex"
                        justifyContent="space-around"
                        flexDirection="row"
                        flexWrap="wrap"
                        width="100%"
                        alignItems="center"
                      >
                        <Container flexBasis="40%">
                          <StyledButton
                            onClick={handleSubmitChanges}
                            type={"button"}
                            width="100%"
                          >
                            Enviar Edição
                          </StyledButton>
                        </Container>
                        <Container flexBasis="40%">
                          <StyledButton
                            type={"button"}
                            width="100%"
                            onClick={handleCancelEditClick}
                          >
                            Cancelar
                          </StyledButton>
                        </Container>
                      </Container>
                    )}
                  </Container>
                </>
              );
            })}
          </Container>
        </Form>
      </Container>
      {showConfirmation && (
        <DeleteForm>
          <Container
            display="flex"
            justifyContent="space-around"
            flexDirection="row"
            flexWrap="wrap"
            width="50%"
            alignItems="center"
            position="fixed"
            top="40%"
            left="25%"
          >
            <Container flexBasis="100%">
              <Text>Tem certeza que quer deletar esse item?</Text>
            </Container>
            <StyledButton width="200px" onClick={handleDelete}>
              Deletar
            </StyledButton>
            <StyledButton onClick={handleCancelDeleteClick} width="200px">
              Cancelar
            </StyledButton>
          </Container>
        </DeleteForm>
      )}
    </Container>
  );
}
