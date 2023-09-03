import axios from 'axios';
import SearchBar from '../../design_system/Molecules/SearchBar/searchbar.view';
import Table from '../../design_system/Molecules/Table/table.view';
import TableHeaderData from '../../design_system/Molecules/Table/components/TableHeader/components/TableHeaderData/tableheaderdata.view';
import TableRow from '../../design_system/Molecules/Table/components/TableRow/tablerow.view';
import TableData from '../../design_system/Molecules/Table/components/TableData/tabledata.view';
import TableHeader  from '../../design_system/Molecules/Table/components/TableHeader/tableheader.view';
import { useNavigate } from 'react-router-dom'
import { validateUserkey } from '../../constants/userkey'

export default function Clients() {
  const navigate = useNavigate()

  //if (!validateUserkey) navigate('/')

  const config = {
    headers: {
      'User-Key': validateUserkey,
      'Content-Type': 'application/json', // por exemplo, para um corpo JSON
    }
  };

  

  // const response = axios.get('https://public2-api2.ploomes.com/Contacts?$select=Id', config)
  // console.log(response.then(json => {
  //   const resposta = json.data
  //   console.log(resposta.value.length)
  // }))

  // axios.get('https://public2-api2.ploomes.com/Contacts?$select=Id', config).then(response => {
  //   const resposta = response.data
  //   console.log(resposta.value.length)
  // })

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
          <TableRow>
            <TableData>
              teste
            </TableData>
            <TableData>
              teste
            </TableData>
            <TableData>
              teste
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              teste
            </TableData>
            <TableData>
              teste
            </TableData>
            <TableData>
              teste
            </TableData>
          </TableRow>
        </TableHeader>
      </Table>
    </>
  )
}
