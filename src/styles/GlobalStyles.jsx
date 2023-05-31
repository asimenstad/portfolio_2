import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html{
    --color-cta: #FF85CE;
    --color-black: #000;
    --color-white: #fffbf6;
    --color-muted: #6e6e6e;
    --font-primary:  "Gotu", sans-serif;
    --font-secondary: "Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

body, h1, h2, h3, h4, p, ul{
    margin: 0;
    padding: 0;
}

body{
    font-family: "Poppins", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--color-white)
}

h1, h2, h3, h4{
    font-family:  "Gotu", sans-serif;
}

p{
    font-weight: 300;
}

li{
    list-style: none;
}

a{
    cursor: pointer;
    text-decoration: none;
}

header, main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

main{
    flex-direction: column;
    padding-block: 5rem;
}

nav, section{
   max-width: 800px;

}

section{
   margin-bottom: 20rem;
   padding-top: 1rem;
}

.section-header{
  display: flex;
  align-items: center;
  gap: 20px;
  white-space: nowrap;
  width: 100%;
}

.section-header::after, section:nth-child(even) .section-header::before {
  content: "";
  width: 100%;
  display: inline-block;
  border-bottom: 0.1rem solid #000;
}

.bold{
    font-weight: 500;
}

.caption{
    text-transform: uppercase;
    font-size: 0.8rem;
}

.nav-link{
    color: var(--color-black);
    background: linear-gradient(currentColor, currentColor) left bottom / 0 0.1rem no-repeat;
    padding-bottom: 0.2rem;
    transition: 0.5s background-size;
}

.nav-link:hover{
    background-size: 100% 0.1rem;
}

`;

export default GlobalStyle;
