import styled from 'styled-components';

export const StyledTableData = styled.td`
  padding: 8px; 
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.pallete.primary.black};
  cursor: pointer;
`