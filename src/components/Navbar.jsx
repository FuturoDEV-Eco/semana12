import {Link} from "react-router-dom"

function Navbar(){
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/lista-trilhas">Lista</Link>
      <Link to="/dash">Dash</Link>
    </nav>
  )
}

export default Navbar