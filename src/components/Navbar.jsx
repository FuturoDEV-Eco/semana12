import { Link } from "react-router-dom";
import { Button } from "@mui/material";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <Button variant="contained">Home</Button>
      </Link>
      <Link to="/cadastro">
        <Button variant="contained">Cadastro</Button>
      </Link>
      <Link to="/lista-trilhas">
        <Button variant="contained">Lista</Button>
      </Link>
    </nav>
  );
}

export default Navbar;
