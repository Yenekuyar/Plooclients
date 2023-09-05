import Server from "../../../server/server.controller";

// eu ia fazer por .env mas quando baixassem o projeto ia dar erro então hardcodei.
// const apiUrl = process.env.REACT_APP_CENTRAL_API_URL || "";

const apiUrl = "https://public-api2.ploomes.com/";
const clients = new Server(apiUrl);

interface IGetClientsResponse {
  value: [
    {
      Id: number;
      Name: string;
      CNPJ: string;
      CPF: string;
      Email: string;
      Phones: [{
        PhoneNumber: string,
      }];
    }
  ];
}

export function getClients(endpoint: string, userkey: string): Promise<IGetClientsResponse> {
  const response = clients.get<IGetClientsResponse>(`${endpoint}`, `${userkey}`);
  response
    .then((json) => {
    const response = json.value;
    return response;
  });
  return response
}
