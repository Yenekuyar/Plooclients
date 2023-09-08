import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    width: 90%;
    box-shadow: 8px 8px 8px 0px rgba(0,0,0,0.75);
    border-radius: 4px;
    border: 4px solid ${props => props.theme.pallete.primary.main};
    border-top: 12px solid ${props => props.theme.pallete.primary.main};
    margin: 4px;
`