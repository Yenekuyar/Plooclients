import AuthForm from "../../design_system/Molecules/AuthForm/authform.view";
import { validateUserkey } from "../../constants/userkey";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate()

  if (validateUserkey) navigate('/clients')

  return (
    <>
      <AuthForm/>
    </>
  )
}
