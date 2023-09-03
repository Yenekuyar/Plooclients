import axios from "axios";

class Server {
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  private axiosJson<RETURN_TYPE, BODY_TYPE>(
    endpoint: string,
    method: "GET" | "POST" | "PATCH" | "DELETE",
    userkey: string,
    body?: BODY_TYPE,
  ): Promise<RETURN_TYPE> {
    const response = axios(this.apiUrl + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
        "User-Key": `${userkey}`,
      },
      data: JSON.stringify(body),
    })
      .then((response) => {
        const json = response.data;
        return json;
      })
      // .catch((error) => {
      //   alert(error);
      // });
    return response;
  }

  get<RETURN_TYPE>(endpoint: string, userkey: string): Promise<any> {
    return this.axiosJson<RETURN_TYPE, any>(endpoint, "GET", userkey);
  }

  post<RETURN_TYPE, BODY_TYPE>(endpoint: string, data: any, userkey: string): Promise<any> {
    return this.axiosJson<RETURN_TYPE, BODY_TYPE>(endpoint, "POST", userkey, data);
  }

  patch<RETURN_TYPE, BODY_TYPE>(endpoint: string, data: any, userkey: string): Promise<any> {
    return this.axiosJson(endpoint, "PATCH", userkey, data);
  }

  delete<RETURN_TYPE>(endpoint: string, userkey: string): Promise<any> {
    return this.axiosJson<RETURN_TYPE, any>(endpoint, "DELETE", userkey);
  }
}

export default Server
