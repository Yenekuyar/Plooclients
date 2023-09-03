import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { validateUserkey } from '../../constants/userkey'
import SearchBar from '../../design_system/Molecules/SearchBar/searchbar.view';
import List from '../../design_system/Molecules/List/list.view';
import ListItem from '../../design_system/Molecules/List/components/ListItem/listitem.view';

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
    <SearchBar/>
    Barra de busca
      <ul>
        <li>sexo</li>
        <li>sexo</li>
        <li>sexo</li>
        <li>sexo</li>
        <li>sexo</li>
        <li>sexo</li>
      </ul>
    </>
  )
}
