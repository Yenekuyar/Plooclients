import styled from 'styled-components';
import { StyledInput } from '../../../../Atoms/Input/input.styles';

export const StyledSearchBarInput = styled(StyledInput)`
      padding-left: 30px;
      background-image: url('icons/buscar.svg'); 
      background-size: 20px;
      background-repeat: no-repeat;
      background-position: 5px center;
      border: 1px solid ${props => props.theme.pallete.primary.text};
      background-color: ${props => props.theme.pallete.primary.secondary};
      box-shadow: inset 7px 10px 29px -20px ${props => props.theme.pallete.primary.text};
      height: 30px;
      
`