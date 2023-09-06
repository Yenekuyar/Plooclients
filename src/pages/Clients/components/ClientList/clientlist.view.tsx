import Table from "../../../../design_system/Molecules/Table/table.view";
import TableRow from "../../../../design_system/Molecules/Table/components/TableRow/tablerow.view";
import TableData from "../../../../design_system/Molecules/Table/components/TableData/tabledata.view";
import ClientLink from "./components/ClientLink/clientlink.view";
import TableHeader from "../../../../design_system/Molecules/Table/components/TableHeader/tableheader.view";
import InfiniteScroll from "react-infinite-scroll-component";
import TableHeaderData from "../../../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderData/tableheaderdata.view";
import { formatCpf } from "../../../../constants/convertCpf";
import { formatCnpj } from "../../../../constants/convertCnpj";
import { getClients } from "../../services/getClients";
import { IPlooClients } from "../../clients.types";
import { TableContainer } from "../../../../design_system/Molecules/Table/components/TableContainer/tablecontainer.styles";
import { TableHeaderRow } from "../../../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderRow/tableheaderow.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUserkey } from "../../../../design_system/Atoms/Container/getUserkey";
import { StyledSearchBar } from "../../../../design_system/Molecules/SearchBar/searchbar.styles";

export default function ClientList() {
  const [clients, setClients] = useState<IPlooClients[]>([]);
  const [skipValue, setSkipValue] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const [infiniteScrollLock, setInfiniteScrollLock] = useState<boolean>(false)

  const navigate = useNavigate();
  const userkey = validateUserkey()



  useEffect(() => {
    if (userkey && !infiniteScrollLock) {
      getClients(
        `Contacts?$top=30&$skip=${skipValue}&$expand=Phones`,
        userkey || ""
      )
        .then((data) => {
          if (data.value.length > 0) {
            setClients((prevClients) => [...prevClients, ...data.value]);
          } else {
            setHasMore(false);
          }
        })
        .catch((error) => {
          console.error("Erro ao buscar clientes:", error);
        });
    } else if (infiniteScrollLock) {
      getClients(
        `Contacts`,
        userkey || ""
      )
    }
  }, [skipValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const fetchMoreData = () => {
    return setSkipValue(skipValue + 30);
  };

  return (
    <>
      <StyledSearchBar 
        placeholder="Busque um cliente por um dos dados da tabela..." 
        value={searchValue}
        onChange={handleSearchValue}
      />
      <TableContainer id="scrollableDiv">
        <InfiniteScroll
          hasMore={hasMore}
          next={fetchMoreData}
          dataLength={clients.length}
          loader={<p>Carregando...</p>}
          scrollableTarget="scrollableDiv"
        >
          <Table cellspacing={"0"}>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderData>Nome</TableHeaderData>
                <TableHeaderData>Id</TableHeaderData>
                <TableHeaderData>CNPJ/CPF</TableHeaderData>
                <TableHeaderData>E-mail</TableHeaderData>
                <TableHeaderData>Telefone</TableHeaderData>
              </TableHeaderRow>
            </TableHeader>
            <tbody>
              {clients.map((client) => {
                return (
                  <TableRow key={client.Id}>
                    <TableData>
                      <ClientLink
                        handleRowClick={() => {
                          navigate(`${client.Id}`);
                        }}
                      >
                        {client.Name}
                      </ClientLink>
                    </TableData>
                    <TableData>
                      <ClientLink
                        handleRowClick={() => {
                          navigate(`${client.Id}`);
                        }}
                      >
                        {client.Id}
                      </ClientLink>
                    </TableData>
                    {client.CNPJ ? (
                      <TableData>
                        <ClientLink
                          handleRowClick={() => {
                            navigate(`${client.Id}`);
                          }}
                        >
                          {formatCnpj(client.CNPJ)}
                        </ClientLink>
                      </TableData>
                    ) : (
                      <TableData>
                        <ClientLink
                          handleRowClick={() => {
                            navigate(`${client.Id}`);
                          }}
                        >
                          {formatCpf(client.CPF || "")}
                        </ClientLink>
                      </TableData>
                    )}
                    <TableData>
                      <ClientLink
                        handleRowClick={() => {
                          navigate(`${client.Id}`);
                        }}
                      >
                        {client.Email}
                      </ClientLink>
                    </TableData>
                    <TableData>
                      <ClientLink
                        handleRowClick={() => {
                          navigate(`${client.Id}`);
                        }}
                      >
                        {client.Phones && client.Phones.length > 0
                          ? client.Phones[0].PhoneNumber
                          : ""}
                      </ClientLink>
                    </TableData>
                  </TableRow>
                );
              })}
            </tbody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
    </>
  );
}
