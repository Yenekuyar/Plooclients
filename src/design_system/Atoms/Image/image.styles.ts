import { styled } from "styled-components";

export const StyledImage = styled.img`
    width: ${props => props.width ? props.width : 'auto'};
    margin-right: 2em;
`