import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "var(--color-black)",
    white: "var(--color-white)",
    primary: "var(--color-primary)",
  },
  font: {
    primary: "var(--font-primary)",
    secondary: "var(--font-secondary)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
