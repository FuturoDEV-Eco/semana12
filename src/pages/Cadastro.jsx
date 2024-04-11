import styles from "./style.module.css"
import {UsuariosContext} from "../context/UsuariosContext"
import {useContext} from "react"
import FormCadastroUsuario from "../components/molecules/FormCadastroUsuario"

function Cadastro() {

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  function AdicionarUsuario(){
    setUsuarios([...usuarios, novoUsuario])
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.titulo}>Página Cadastro</h1>
      <FormCadastroUsuario submit={AdicionarUsuario} />
    </div>
  );
}

export default Cadastro;