import Header from "../../design_system/Organisms/Header/header.view";
import { Outlet, useNavigate } from "react-router-dom";

export default function Clients() {
  const navigate = useNavigate();

  const validateUserkey = localStorage.getItem('userkey')

  if (!validateUserkey) navigate("/");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
