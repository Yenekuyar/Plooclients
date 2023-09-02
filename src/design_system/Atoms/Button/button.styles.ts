import styled from 'styled-components'

export const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  height: 48px;
  background-color: ${props => props.theme.pallete.primary.dark};
  color: white;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: #49029a;
    color: #fff;  
  }
`
