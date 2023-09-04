import SearchBar from '../../design_system/Molecules/SearchBar/searchbar.view';
import Header from '../../design_system/Organisms/Header/header.view';
import Table from '../../design_system/Molecules/Table/table.view';
import TableHeaderData from '../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderData/tableheaderdata.view';
import TableRow from '../../design_system/Molecules/Table/components/TableRow/tablerow.view';
import TableData from '../../design_system/Molecules/Table/components/TableData/tabledata.view';
import TableHeader  from '../../design_system/Molecules/Table/components/TableHeader/tableheader.view';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useNavigate } from 'react-router-dom'
import { validateUserkey } from '../../constants/userkey'
import { getClients } from './services/getClients';
import { useEffect, useState } from 'react';
import { IPlooClients } from './clients.types';
import { formatCpf } from '../../constants/convertCpf';
import { formatCnpj } from '../../constants/convertCnpj';
import { TableContainer } from '../../design_system/Molecules/Table/components/TableContainer/tablecontainer.styles';
import { TableHeaderRow } from '../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderRow/tableheaderow.styles';

export default function Clients() {
  const navigate = useNavigate()
  
  if (!validateUserkey) navigate('/')

  const [clients, setClients] = useState<IPlooClients[]>([])
  const [skipValue, setSkipValue] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true)
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    getClients(`Contacts?$top=30&$skip=${skipValue}&$expand=Phones`,validateUserkey || '')
    .then((data) => {
      if (data.value.length > 0) {
        setClients((prevClients) => [...prevClients, ...data.value]);
      } else {
        setHasMore(false);
      }
    })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
    });


  }, [skipValue]);

  const fetchMoreData = () => {
    return setSkipValue(skipValue + 30)
  }

  return (
    <>
      <Header/>
      <SearchBar />
        <TableContainer id="scrollableDiv">
            <InfiniteScroll 
              hasMore={hasMore}
              next={fetchMoreData}
              dataLength={clients.length}
              loader={<p>Carregando...</p>}
              scrollableTarget="scrollableDiv"
            >
          <Table cellspacing={'0'}>
            <TableHeader>
              <TableHeaderRow>
                <TableHeaderData>
                  Nome
                </TableHeaderData>
                <TableHeaderData>
                  Id
                </TableHeaderData>
                <TableHeaderData>
                  CNPJ/CPF
                </TableHeaderData>
                <TableHeaderData>
                  E-mail
                </TableHeaderData>
                <TableHeaderData>
                  Telefone
                </TableHeaderData>
              </TableHeaderRow>
            </TableHeader>
            {clients.map((client) => {
              return (
                  <TableRow key={client.Id}>
                    <TableData>{client.Name}</TableData>
                    <TableData>{client.Id}</TableData>
                    {client.CNPJ ? <TableData>{formatCnpj(client.CNPJ)}</TableData> : <TableData>{formatCpf(client.CPF || '')}</TableData>}
                    <TableData>{client.Email}</TableData>
                    <TableData>
                      {client.Phones && client.Phones.length > 0
                        ? client.Phones[0].PhoneNumber : ''}
                    </TableData>
                  </TableRow>
              )
            })}
          </Table>
            </InfiniteScroll>
        </TableContainer>
    </>
  )
}
