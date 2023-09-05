import SearchBar from "../../design_system/Molecules/SearchBar/searchbar.view";
import Header from "../../design_system/Organisms/Header/header.view";
import Table from "../../design_system/Molecules/Table/table.view";
import TableHeaderData from "../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderData/tableheaderdata.view";
import TableRow from "../../design_system/Molecules/Table/components/TableRow/tablerow.view";
import TableData from "../../design_system/Molecules/Table/components/TableData/tabledata.view";
import TableHeader from "../../design_system/Molecules/Table/components/TableHeader/tableheader.view";
import InfiniteScroll from "react-infinite-scroll-component";
import { Outlet, useNavigate } from "react-router-dom";
import { validateUserkey } from "../../constants/userkey";
import { getClients } from "./services/getClients";
import { useEffect, useState } from "react";
import { IPlooClients } from "./clients.types";
import { formatCpf } from "../../constants/convertCpf";
import { formatCnpj } from "../../constants/convertCnpj";
import { TableContainer } from "../../design_system/Molecules/Table/components/TableContainer/tablecontainer.styles";
import { TableHeaderRow } from "../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderRow/tableheaderow.styles";

export default function Clients() {
  const navigate = useNavigate();

  if (!validateUserkey) navigate("/");

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
