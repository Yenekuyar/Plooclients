import App from "./App";
import Home from "./pages/Home/home.view";
import React from "react";
import Clients from "./pages/Clients/clients.view";
import NotFound from "./pages/NotFound/notfound.view";
import ReactDOM from "react-dom/client";
import ClientList from "./pages/Clients/components/ClientList/clientList.view";
import ClientModal from "./pages/Clients/components/ClientModal/clientModal.view";
import ClientGenerator from "./pages/Clients/components/ClientGenerator/clientGenerator.view";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />}></Route>
      <Route path="/clients" element={<Clients />}>
        <Route path="" element={<ClientList />} />
        <Route id="client-modal" path=":id" element={<ClientModal />} />
        <Route id="client-generator" path="create" element={<ClientGenerator />} />
      </Route>

      <Route path="*" element={<NotFound />}/>
    </Route>
  )

);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
