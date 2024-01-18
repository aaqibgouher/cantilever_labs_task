import { createTheme} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1F1D2B",
      light: "#252836",
      dark: "#1F1D2B",
      contrastText: "#fff",
    },
    secondary: {
      main: "#EA7C69",
      light: "#ffffff",
      dark: "#EA7C69",
      contrastText: "#ABBBC2",
    },
  },
});

export default theme;
