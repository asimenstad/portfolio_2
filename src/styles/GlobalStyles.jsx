import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    --color-black: #000;
    --color-white: #fff;
    --color-primary: #FF85CE
    --font-primary: "Vollkorn", serif;
    --font-secondary: "Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
body{
    margin: 0;
    padding: 0;
    font-family: var(--font-secondary);
}
h1, h2,h3{
    font-family: var(--font-primary);
}
`;

export default GlobalStyle;
