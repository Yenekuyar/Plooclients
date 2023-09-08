import Server from "../../../../../server/server.controller";

interface IPatchClientBody {
    Name?: string;
    Email?: string;
    CNPJ?: string;
    CPF?: string;
    StreetAddress?: string;
    StreetAddressNumber?: any;
    Neighborhood?: string;
    ZipCode?: number;
    Phones?: Phone[];
}

export interface Phone {
  Id: number | null;
  PhoneNumber: string | '';
}

const apiUrl = "https://public-api2.ploomes.com/";
const client = new Server(apiUrl);

export function patchClient(endpoint: string, userkey: string, data: any) {
  const response = client.patch<any, IPatchClientBody>(
    `${endpoint}`,
    `${userkey}`,
    data
  );
  return response;
}
