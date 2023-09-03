import { validateUserkey } from "../../../constants/userkey";
import Server from "../../../server/server.controller";

const apiUrl = process.env.REACT_APP_CENTRAL_API_URL || "";
const clients = new Server(apiUrl);

interface IGetClientsResponse {
  data: Object
}

export function getClients(){
  const promise = clients.get<IGetClientsResponse>(
    "Self/Login",
    validateUserkey || ""
  );
  promise
    .then((response) => {
      console.log(response)
    })
}
