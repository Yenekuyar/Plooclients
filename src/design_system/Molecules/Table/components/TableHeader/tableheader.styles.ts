import styled from 'styled-components';

export const StyledTableHeader = styled.thead`
  padding: 8px;
  text-align: center;
  color: ${props => props.theme.pallete.primary.white};
  background-color: ${props => props.theme.pallete.primary.main};
`