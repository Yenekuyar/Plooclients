import styled from "styled-components";

export const StyledTableData = styled.td`
  height: 30px;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.pallete.primary.black};
  cursor: pointer;
`;