import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home/home.view";
import Clients from "./pages/Clients/clients.view";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientModal from "./pages/Clients/components/ClientModal/clientmodal.view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/clients",
        element: <Clients />,
        children: [{
          element: <ClientModal />,
          path: "/clients/:id",
        }],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
