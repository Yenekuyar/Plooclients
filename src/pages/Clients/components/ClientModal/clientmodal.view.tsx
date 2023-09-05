import { useParams } from "react-router-dom";
import { getClientModal } from "./services/getClientModal";
import { validateUserkey } from "../../../../constants/userkey";
import { useState } from "react";

export default function ClientModal() {
const [selectedClient, setSelectedClient] = useState<Object>({});

  const client = useParams();
  const clientId = client.id;

//   getClientModal(
//     `Contacts?$filter=Id eq ${clientId}&$expand=Phones`,
//     validateUserkey || ""
//   ).then(data => {
//     setSelectedClient(data.value)
//   })
  
    console.log(selectedClient)
  
  return (
    <>

    </>
  );
}
