import Header from "../../design_system/Organisms/Header/header.view";
import { Outlet, useNavigate } from "react-router-dom";
import { validateUserkey } from "../../constants/userkey";

export default function Clients() {
  const navigate = useNavigate();

  if (!validateUserkey) navigate("/");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
