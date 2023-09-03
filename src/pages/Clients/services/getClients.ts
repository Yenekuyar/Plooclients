import { validateUserkey } from "../../../constants/userkey";
import Server from "../../../server/server.controller";

const apiUrl = process.env.REACT_APP_CENTRAL_API_URL || "";
const clients = new Server(apiUrl);

interface IGetClientsResponse {
  value: [
    {
      Id: number;
      Name: string;
      CNPJ: string;
      CPF: string;
    }
  ];
}


export function getClients(userkey: string): Promise<IGetClientsResponse> {
  const response = clients.get<IGetClientsResponse>("Contacts", `${userkey}`);
  response
    .then((json) => {
    const response = json.value;
    return response;
  });
  return response
}
