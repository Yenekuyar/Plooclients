import Server from "../../../server/server.controller";

interface IGetClientsResponse {
  value: [
    {
      Id: number;
      Name: string;
      CNPJ: string;
      CPF: string;
      Email: string;
      Phones: [
        {
          PhoneNumber: string;
        }
      ];
    }
  ];
}

const apiUrl = "https://public-api2.ploomes.com/";
const clients = new Server(apiUrl);

export function getClients(
  endpoint: string,
  userkey: string
): Promise<IGetClientsResponse> {
  const response = clients.get<IGetClientsResponse>(
    `${endpoint}`,
    `${userkey}`
  );
  response.then((json) => {
    const response = json.value;
    return response;
  });
  return response;
}
