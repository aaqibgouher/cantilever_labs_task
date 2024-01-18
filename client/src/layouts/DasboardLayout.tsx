import SidebarComponent from "../components/helpers/SidebarComponent";
import { ReactComponentType } from "../interfaces/common";
import { Toolbar, Container, Box, CssBaseline } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DasboardLayout: ReactComponentType = ({ children }) => {
  const theme = useTheme();

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          backgroundColor: theme.palette.primary.light,
        }}
      >
        <SidebarComponent />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default DasboardLayout;
