import styled from 'styled-components';

export const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px;
  cursor: pointer;
  transition: 0.5s;
  border: none;
  color: ${props => props.theme.pallete.primary.text};

  &:hover {
    background-color: ${props => props.theme.pallete.primary.main2};
    color: ${props => props.theme.pallete.primary.white};
  };

  &:active {
    transition: 0.1s;
    background-color: ${props => props.theme.pallete.primary.secondary};
    color: ${props => props.theme.pallete.primary.main};
  };
`