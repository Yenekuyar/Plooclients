import Container from "../../design_system/Atoms/Container/container.view";
import AuthForm from "../../design_system/Molecules/AuthForm/authform.view";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const validateUserkey = localStorage.getItem("userkey");

  if (validateUserkey !== null && validateUserkey !== "") navigate("/clients");

  return (
    <>
      <Container>
        <AuthForm />
      </Container>
    </>
  );
}
