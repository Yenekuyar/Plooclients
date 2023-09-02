import styled from 'styled-components'

export const StyledHeader = styled.header`
  height: 80px;
  background-color: ${props => props.theme.pallete.primary.main};
  color: ${props => props.theme.pallete.primary.text};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`