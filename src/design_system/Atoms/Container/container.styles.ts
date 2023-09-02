import styled from 'styled-components'

export const StyledContainer = styled.div`
  background-color: ${props => props.theme.pallete.primary.main};
  border-radius: 0.5em;
  color: ${props => props.theme.pallete.primary.text};
  margin: 4em;
  padding: 4em;
  display: flex;
  flex-direction: column-reverse;
`