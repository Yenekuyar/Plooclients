import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
        font-family: 'Abel', sans-serif;
    }

    h1 {
        margin: 0;
    }

    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: ${(props) => props.theme.pallete.primary.secondary};
        color: ${(props) => props.theme.pallete.primary.text};
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        font-family: 'Abel', sans-serif;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }

    .App {
        width: 100%;
        height: 100%;
        overflow: hidden;
        background-color: ${(props) => props.theme.pallete.primary.secondary};
    }

    #root {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    
`;
