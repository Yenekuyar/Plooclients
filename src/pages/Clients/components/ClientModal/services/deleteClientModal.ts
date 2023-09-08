import Server from "../../../../../server/server.controller";

const apiUrl = "https://public-api2.ploomes.com/";
const client = new Server(apiUrl);

export function deleteClient(endpoint: string, userkey: string) {
  const response = client.delete<any>(`${endpoint}`, `${userkey}`);
  return response;
}
