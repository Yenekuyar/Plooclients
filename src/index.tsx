import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./pages/Home/home.view";
import Clients from "./pages/Clients/clients.view";
import NotFound from "./pages/NotFound/notfound.view";
import ClientModal from "./pages/Clients/components/ClientModal/clientmodal.view";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import ClientList from "./pages/Clients/components/ClientList/clientlist.view";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index element={<Home />}></Route>
      <Route path="/clients" element={<Clients />}>
        <Route path="" element={<ClientList />} />
        <Route path=":id" element={<ClientModal />} />
      </Route>
      
      <Route path="*" element={<NotFound />}/>
    </Route>
  )
  
//   [
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/clients",
//         element: <Clients />,
//         children: [{
//           element: <ClientModal />,
//           path: "/clients/:id",
//         }],
//       },
//     ],
//   },
// ]

);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
