import React, { useState } from 'react';
import Container from "../../Atoms/Container/container.view";
import Label from "../../Atoms/Label/label.view";
import { useNavigate } from "react-router-dom";
import { StyledAuthForm } from "./authform.styles";
import { AuthFormButton } from "./components/AuthFormButton/authformbutton.styles";
import { AuthFormInput } from "./components/AuthFormInput/authformlabel.styles";

export default function AuthForm() {
  const [userkey, setUserkey] = useState('');

  const navigate = useNavigate()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserkey(e.target.value)
  }

  const salvaKey = () => {
    if(userkey){
      localStorage.setItem('userkey', userkey)
      navigate('clients')
    }
  }

  return (
    <StyledAuthForm>
      <Container>
        <Label>Para acessar a página preencha com uma Userkey válida de um Usuário de Integração da Ploomes</Label>
        <AuthFormInput
          type={""}
          placeholder={"Insira sua User-Key aqui..."}
          id={"userkey"}
          required
          value={userkey}
          onChange={handleInputChange}
        />
        <AuthFormButton
          type="submit"
          onClick={salvaKey}
        >
          Enviar
        </AuthFormButton>
      </Container>
    </StyledAuthForm>
  )
}
