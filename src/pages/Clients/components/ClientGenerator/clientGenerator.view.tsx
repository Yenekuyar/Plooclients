import Form from "../../../../design_system/Organisms/Form/form.view";
import Input from "../../../../design_system/Atoms/Input/input.view";
import Label from "../../../../design_system/Atoms/Label/label.view";
import Container from "../../../../design_system/Atoms/Container/container.view";
import { useEffect, useState } from "react";
import { StyledInput } from "../../../../design_system/Atoms/Input/input.styles";
import { StyledSelect } from "../../../../design_system/Atoms/Select/select.styles";
import { StyledOption } from "../../../../design_system/Atoms/Option/option.styles";
import { StyledButton } from "../../../../design_system/Atoms/Button/button.styles";
import { postClient } from "./services/postClient";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../../../hooks/useDebounce";

export default function ClientGenerator() {
  const [clientTypeId, setClientTypeId] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");
  const [clientCpf, setClientCpf] = useState<string>("");
  const [clientCnpj, setClientCnpj] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientZipCode, setClientZipCode] = useState<string>("");
  const [clientStreetAddress, setClientStreetAddress] = useState<string>("");
  const [clientStreetAddressNumber, setClientStreetAddressNumber] =
    useState<string>("");
  const [clientNeighborhood, setClientNeighborhood] = useState<string>("");
  const [clientCreateObserver, setClientCreateObserver] = useState<number>(0);
  const [clientCreateLock, setClientCreateLock] = useState<boolean>(false);

  const predefinedOptions = ["Empresa", "Pessoa"];
  const validateUserkey = localStorage.getItem("userkey");
  const debouncedCreateObserver = useDebounce(clientCreateObserver, 300);
  const navigate = useNavigate();

  function handleOptionChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setClientTypeId(e.target.value);
  }

  useEffect(() => {
    if (!validateUserkey) navigate("/");
    if (clientCreateLock) {
      const body = {
        Name: clientName,
        Email: clientEmail,
        CNPJ: clientCnpj,
        CPF: clientCpf,
        StreetAddress: clientStreetAddress,
        StreetAddressNumber: clientStreetAddressNumber,
        Neighborhood: clientNeighborhood,
        ZipCode: clientZipCode,
        TypeId: clientTypeId == "Empresa" ? 1 : 2,
        Phones: [
          {
            PhoneNumber: clientPhone || "",
          },
        ],
      };
      postClient(`Contacts?$expand=Phones`, validateUserkey || "", body).then(
        (data) => {
          navigate(`/clients/${data.value[0].Id}`);
        }
      );
      setClientCreateLock(false);
    }
  }, [debouncedCreateObserver]);

  const handleClientCreate = () => {
    setClientCreateObserver(clientCreateObserver + 1);
    setClientCreateLock(true);
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

  return (
    <>
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
              <Container
                display="flex"
                justifyContent="center"
                flexDirection="row"
                flexWrap="wrap"
                width="100%"
                alignItems="center"
              >
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
                  <StyledInput
                    type={"text"}
                    id={"client-name"}
                    value={clientName}
                    onChange={handleNameInputChange}
                  />
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
                  <StyledInput
                    type={"text"}
                    id={"client-email"}
                    value={clientEmail}
                    onChange={handleEmailInputChange}
                  />
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
                  <StyledInput
                    type={"text"}
                    id={"client-phone"}
                    value={clientPhone}
                    onChange={handlePhoneInputChange}
                  />
                </Container>
                {clientTypeId == "Empresa" ? (
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
                    <StyledInput
                      type={"text"}
                      id={"client-cnpj"}
                      value={clientCnpj}
                      onChange={handleCnpjInputChange}
                    />
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
                    <StyledInput
                      type={"text"}
                      id={"client-cpf"}
                      value={clientCpf}
                      onChange={handleCpfInputChange}
                    />
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
                  <StyledInput
                    type={"text"}
                    id={"client-neighborhood"}
                    value={clientNeighborhood}
                    onChange={handleNeighborhoodInputChange}
                  />
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
                  <StyledInput
                    type={"text"}
                    id={"client-address"}
                    value={clientStreetAddress}
                    onChange={handleStreetAddressInputChange}
                  />
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
                  <StyledInput
                    type={"text"}
                    id={"client-address-number"}
                    value={clientStreetAddressNumber}
                    onChange={handleStreetAddressNumberInputChange}
                  />
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
                  <StyledInput
                    type={"text"}
                    id={"client-zipcode"}
                    value={clientZipCode}
                    onChange={handleZipcodeInputChange}
                  />
                </Container>
                <Container
                  flexBasis="100%"
                  display="flex"
                  justifyContent="space-around"
                  flexDirection="column"
                  flexWrap="wrap"
                  width="100%"
                  alignItems="center"
                >
                  <Label>Tipo do Cliente</Label>
                  <StyledSelect
                    id={"predefinedOptions"}
                    value={clientTypeId}
                    onChange={handleOptionChange}
                    required
                  >
                    <StyledOption value="">
                      Selecione o Tipo do Cliente
                    </StyledOption>
                    {predefinedOptions.map((option, index) => (
                      <StyledOption key={index} value={option}>
                        {option}
                      </StyledOption>
                    ))}
                  </StyledSelect>
                </Container>
              </Container>
              <Container flexBasis="100%">
                <Container flexBasis="20%">
                  <StyledButton
                    width="100%"
                    onClick={handleClientCreate}
                    type={"button"}
                  >
                    Criar Cliente
                  </StyledButton>
                </Container>
              </Container>
            </Container>
          </Form>
        </Container>
      </Container>
    </>
  );
}
