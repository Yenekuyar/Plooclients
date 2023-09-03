import styled from 'styled-components'

export const StyledInput = styled.input`
    border-radius: 4px;
    padding: 8px;
    margin: 4px;
    height: 32px;
    overflow-x: auto;
    width: ${props => props.width ? props.width : 'auto'};

    &:active {
        text-decoration: none;
    }
`;