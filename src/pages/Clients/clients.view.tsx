import SearchBar from '../../design_system/Molecules/SearchBar/searchbar.view';
import Table from '../../design_system/Molecules/Table/table.view';
import TableHeaderData from '../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderData/tableheaderdata.view';
import TableRow from '../../design_system/Molecules/Table/components/TableRow/tablerow.view';
import TableData from '../../design_system/Molecules/Table/components/TableData/tabledata.view';
import TableHeader  from '../../design_system/Molecules/Table/components/TableHeader/tableheader.view';
import { useNavigate } from 'react-router-dom'
import { validateUserkey } from '../../constants/userkey'
import { getClients } from './services/getClients';
import { useEffect, useState } from 'react';
import { IPlooClients } from './clients.types';
import { formatCpf } from '../../constants/convertCpf';
import { formatCnpj } from '../../constants/convertCnpj';

export default function Clients() {
  const navigate = useNavigate()
  
  if (!validateUserkey) navigate('/')

  const [clients, setClients] = useState<IPlooClients[]>([])
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState<string>('');


  useEffect(() => {

    getClients(validateUserkey || '')
      .then((data) => {
        setClients(data.value);
      })
      .catch((error) => {
        console.error('Erro ao buscar clientes:', error);
      });
  }, []);

  console.log(clients)

  
  // useEffect(() => {
  //   const clients = getClients(validateUserkey || "") {
      

  //     console.log(characters);
  //     // verifica se existe algum duplicado, eu tava com um bug de duplicar as primeiras requisições
  //     setCharacters(prevState => [...prevState, ...characters.filter((character:any) => !prevState.some(prevCharacter => prevCharacter.id === character.id))]);
  //   }
  //   getCharacters();
  // }, [currentPage]);


 

  return (
    <>
      <SearchBar />
      <Table cellspacing={'0'}>
        <TableHeader>
          <TableRow>
            <TableHeaderData>
              Nome
            </TableHeaderData>
            <TableHeaderData>
              Id
            </TableHeaderData>
            <TableHeaderData>
              CNPJ/CPF
            </TableHeaderData>
          </TableRow>
        </TableHeader>
        {clients.map((client) => (
          <TableRow key={client.Id}>
            <TableData>{client.Id}</TableData>
            <TableData>{client.Name}</TableData>
            {client.CNPJ ? <TableData>{formatCnpj(client.CNPJ)}</TableData> : <TableData>{formatCpf(client.CPF || '')}</TableData>}
          </TableRow>
        ))}
      </Table>
    </>
  )
}
