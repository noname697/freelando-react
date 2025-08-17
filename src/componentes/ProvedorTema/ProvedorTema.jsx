import { ThemeProvider } from "@emotion/react";

const tema = {
  cores: {
    branco: "",
    atencao: "",
    focus: "",
    primarias: {
      a: "#5754ED",
      b: "",
      c: "",
    },
    secundarias: {
      a: "#EBEAF9",
      b: "",
      c: "",
    },
    neutras: {
      a: "",
      b: "",
      c: "",
      d: "",
    },
    dark: {
      a: "",
      b: "",
    },
  },
};

const ProvedorTema = ({ children }) => {
  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};

export default ProvedorTema;
