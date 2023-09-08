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
import { validateUserkey } from "../../../../constants/getUserkey";
import { StyledSearchBar } from "../../../../design_system/Molecules/SearchBar/searchbar.styles";
import { containsOnlyNumbers } from "../../../../constants/containsOnlyNumbers";
import useDebounce from "../../../../hooks/useDebounce";

export default function ClientList() {
  const [clients, setClients] = useState<IPlooClients[]>([]);
  const [skipValue, setSkipValue] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");

  const debouncedSearchValue = useDebounce(searchValue, 500);
  const debouncedSkipValue = useDebounce(skipValue, 500);
  const navigate = useNavigate();
  const userkey = validateUserkey();

  //[TODO] Debouncer pra evitar 15 request por letra q eu to digitando
  useEffect(() => {
    if (userkey && searchValue == "") {
      setHasMore(true);
      getClients(
        `Contacts?$top=30&$skip=${skipValue}&$expand=Phones`,
        userkey || ""
      ).then((data) => {
        if (data.value.length > 0) {
          setClients((prevClients) => [...prevClients, ...data.value]);
        } else {
          setHasMore(false);
        }
      });
    }

    if (debouncedSearchValue) {
      setHasMore(true);
      const phoneConditional = (searchParam: string) => {
        if (containsOnlyNumbers(searchParam)) {
          return `Phones/any(p:+p/SearchPhoneNumber+eq+${searchParam})`;
        } else {
          return `contains(IdentityDocument,%27${searchParam}%27)`;
        }
      };

      getClients(
        `Contacts?$filter=contains(Name,%27${debouncedSearchValue}%27)+or+contains(Email,%27${debouncedSearchValue}%27)+or+contains(Register,%27${debouncedSearchValue}%27)+or+${phoneConditional(
          debouncedSearchValue
        )}&$top=30&$skip=${skipValue}&$expand=Phones`,
        userkey || ""
      ).then((data) => {
        if (data.value.length > 0) {
          setClients((prevClients) => [...prevClients, ...data.value]);
        } else {
          setHasMore(false);
        }
      });
    }
  }, [debouncedSkipValue, debouncedSearchValue]);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (searchValue) {
      setSkipValue(0);
      setClients([]);
    } else {
      setSkipValue(0);
      setClients([]);
    }
  };

  const fetchMoreData = () => {
    return setSkipValue(skipValue + 30);
  };

  return (
    <>
      <StyledSearchBar
        placeholder="Busque clientes por Nome, Email ou Número de Telefone"
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
              {/* {clients.length == 0 && unfilteredLock && <p>Nada encontrado...</p>} */}
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
