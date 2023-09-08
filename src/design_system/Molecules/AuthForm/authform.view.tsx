import Container from "../../Atoms/Container/container.view";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledAuthForm } from "./authform.styles";
import { AuthFormButton } from "./components/AuthFormButton/authformbutton.styles";
import { AuthFormInput } from "./components/AuthFormInput/authformlabel.styles";
import { AuthFormLabel } from "./components/AuthFormLabel/authFormLabel.styles";

export default function AuthForm() {
  const [userkey, setUserkey] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserkey(e.target.value);
    localStorage.setItem("userkey", e.target.value);
  };

  const navigateToClientPage = () => {
    navigate("clients");
  };

  const salvaKey = () => {
    if (userkey !== null) {
      navigateToClientPage();
    }
  };

  return (
    <StyledAuthForm>
      <Container backgroundColor>
        <AuthFormLabel>
          Para acessar a página preencha com uma Userkey válida de um Usuário de
          Integração da Ploomes
        </AuthFormLabel>
        <AuthFormInput
          type={""}
          placeholder={"Insira sua User-Key aqui..."}
          id={"userkey"}
          required
          value={userkey}
          onChange={handleInputChange}
        />
        <AuthFormButton type="submit" onClick={salvaKey}>
          Enviar
        </AuthFormButton>
      </Container>
    </StyledAuthForm>
  );
}
