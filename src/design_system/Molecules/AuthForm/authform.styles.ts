import styled from "styled-components";

export const StyledAuthForm = styled.form`
  background-color: ${(props) => props.theme.pallete.primary.main};
  border-radius: 0.5em;
  color: ${(props) => props.theme.pallete.primary.white};
  margin: 15% 4em;
  padding: 4em;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;