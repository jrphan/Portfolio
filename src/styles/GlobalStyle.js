import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle `
    :root {
        --primary-color: #007bff;
        --secondary-color: #6c757d;
        --background-dark-color: #10121A;
        --border-color: #2e344e;
        --background-light-color: #F1F1F1;
        --background-dark-grey: #191D2B;
        --white-color: #fff;
        --font-light-color: #a4acc4;
        --font-dark-color: #313131;
        --font-dark-color-2: #151515;
        --sidebar-dark-color: #191d2b;
        --line-color: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
        background:#2e344e; 
        border-radius: 10px;
    }

    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
        list-style: none;
        text-decoration: none;

        font-family: 'Nunito', sans-serif;
        font-size: 1.005rem;
    }

    body {
        background-color: var(--background-dark-color);
        color: var(--font-light-color);
    }

    a {
        font-family: inherit;
        color: inherit;
        font-size: inherit;
    }

    h1 {
        font-size: 3rem;
        color: var(--white-color);

        span {
            font-size: 3rem;
            color: var(--primary-color);
        }
    }
`;

export default GlobalStyled;