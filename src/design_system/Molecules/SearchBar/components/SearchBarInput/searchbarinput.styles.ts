import styled from 'styled-components';
import { StyledInput } from '../../../../Atoms/Input/input.styles';

export const StyledSearchBarInput = styled(StyledInput)`
      padding-left: 30px; /* Espaçamento à esquerda para a imagem */
      background-image: url('icons/buscar.svg'); /* URL da imagem de fundo */
      background-size: 20px; /* Tamanho da imagem de fundo */
      background-repeat: no-repeat;
      background-position: 5px center; /* Posição da imagem de fundo */
      border: 3px solid ${props => props.theme.pallete.primary.main}; /* Estilo da borda */
      height: 30px; /* Altura do campo de entrada */
      
`