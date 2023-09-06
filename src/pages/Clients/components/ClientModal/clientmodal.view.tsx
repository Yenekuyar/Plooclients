import Container from "../../../../design_system/Atoms/Container/container.view";
import Label from "../../../../design_system/Atoms/Label/label.view";
import { useNavigate, useParams } from "react-router-dom";
import { getClientModal } from "./services/getClientModal";
import { useEffect, useState } from "react";
import { IPlooClients } from "../../clients.types";

export default function ClientModal() {
const [selectedClient, setSelectedClient] = useState<IPlooClients[]>([]);

const client = useParams();
const clientId = client.id;
const validateUserkey = localStorage.getItem('userkey')

  const navigate = useNavigate()

  useEffect(() => {
    if(validateUserkey !== null){
      getClientModal(
        `Contacts?$filter=Id eq ${clientId}&$expand=Phones`,
        validateUserkey || ""
      ).then(data => {
        setSelectedClient(data.value)
      })
    } else {
      navigate('')
    }
  }, []);

  
  return (
    <>
        <button className="testepralaruda" onClick={() => {
            navigate('/clients')
        }}>Botão</button>

        <Container>
          <Label>
            
          </Label>
        </Container>
    </>
  );
}
