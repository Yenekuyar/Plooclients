import styled from 'styled-components';

export const StyledTable = styled.table`
  background-color: ${props => props.theme.pallete.primary.white};
  width: 100%;
  table-layout: fixed;
  max-height: 300px;
  border-collapse: collapse;
`