import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  color: ${props => props.theme.pallete.primary.main};

  &:hover {
    background-color: ${props => props.theme.pallete.primary.main};
    color: ${props => props.theme.pallete.primary.secondary};
  };

  &:active {
    transition: 0.1s;
    background-color: ${props => props.theme.pallete.primary.secondary};
    color: ${props => props.theme.pallete.primary.main};
  };
`