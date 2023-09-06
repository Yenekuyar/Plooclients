import styled from 'styled-components';

export const StyledForm = styled.form`
    display: flex;
    width: 90%;
    box-shadow: 10px 10px 17px 0px rgba(0,0,0,0.75);
    border-radius: 4px;
    border: 2px solid ${props => props.theme.pallete.primary.main};
    margin: 4px;
`