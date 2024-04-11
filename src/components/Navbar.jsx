import { Link } from "react-router-dom";
import CButton from "./atoms/CButton/CButton";

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <CButton>Home</CButton>
      </Link>
      <Link to="/cadastro">
        <CButton>Cadastro</CButton>
      </Link>
      <Link to="/lista-trilhas">
        <CButton>Lista</CButton>
      </Link>
    </nav>
  );
}

export default Navbar;
