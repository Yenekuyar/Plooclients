import styled from "styled-components";

export const StyledTable = styled.table`
  background-color: ${(props) => props.theme.pallete.primary.secondary};
  color: ${(props) => props.theme.pallete.primary.main};
  width: 100%;
  table-layout: fixed;
  max-height: 300px;
  border-collapse: collapse;
`;
