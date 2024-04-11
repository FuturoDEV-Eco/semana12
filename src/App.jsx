import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { UsuariosContextProvider } from "./context/UsuariosContext";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#ff0000", // Replace with your desired color
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <UsuariosContextProvider>
        <Navbar />
        <Outlet />
        <footer>Created by Bruno Costa</footer>
      </UsuariosContextProvider>
    </ThemeProvider>
  );
}

export default App;
