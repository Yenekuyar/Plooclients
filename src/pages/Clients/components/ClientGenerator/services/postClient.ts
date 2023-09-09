import Server from "../../../../../server/server.controller";

interface IPostClientBody {
  Name?: string;
  Email?: string;
  CNPJ?: string;
  CPF?: string;
  StreetAddress?: string;
  StreetAddressNumber?: any;
  Neighborhood?: string;
  ZipCode?: number;
  Phones?: Phone[];
  TypeId: number;
}

interface IPostClientResponse {
  Id: number;
}

export interface Phone {
  Id: number | null;
  PhoneNumber: string | "";
}

const apiUrl = "https://public-api2.ploomes.com/";
const client = new Server(apiUrl);

export function postClient(endpoint: string, userkey: string, data: any) {
  const response = client.post<IPostClientResponse, IPostClientBody>(
    `${endpoint}`,
    `${userkey}`,
    data
  );
  response.then((json) => {
    const response = json.value;
    return response;
  });
  return response;
}
