// App component
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import { ReactComponentType } from "./interfaces/common";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App: ReactComponentType = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/report" element={<DashboardPage />} />
            <Route path="/order-tracking" element={<DashboardPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
