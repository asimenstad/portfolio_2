import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    black: "var(--color-black)",
    white: "var(--color-white)",
    cta: "var(--color-cta)",
    muted: "var(--color-muted)",
  },
  font: {
    primary: "var(--font-primary)",
    secondary: "var(--font-secondary)",
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
