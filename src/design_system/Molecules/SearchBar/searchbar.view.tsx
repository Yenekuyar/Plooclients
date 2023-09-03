import Container from '../../Atoms/Container/container.view'
import { StyledSearchBarInput } from './components/SearchBarInput/searchbarinput.styles'
import { StyledSearchBar } from './searchbar.styles'

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <Container>
        <StyledSearchBarInput
          type={'text'}
          placeholder={'Busque um cliente pelo nome ou id...'}
          id={'search-bar'}
          width={'97%'}
        />
      </Container>
    </StyledSearchBar>
  )
}
