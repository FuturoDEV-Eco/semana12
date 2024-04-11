import { useState } from "react";
import styles from "./style.module.css"
import {TextField, Button} from "@mui/material"
import {UsuariosContext} from "../context/UsuariosContext"
import {useContext} from "react"

function Cadastro() {

  const {usuarios, setUsuarios} = useContext(UsuariosContext)

  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: ""
  })

  function AdicionarUsuario(){
    setUsuarios([...usuarios, novoUsuario])
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.titulo}>Página Cadastro</h1>
      <TextField 
        label="Nome" 
        variant="outlined" 
        size="small" 
        margin="dense"
        onChange={(evento) => setNovoUsuario({...novoUsuario, nome: evento.target.value})} 
      />
      <TextField 
        label="Email" 
        variant="outlined" 
        size="small" 
        margin="dense"
        onChange={(evento) => setNovoUsuario({...novoUsuario, email: evento.target.value})}
      />
      <Button margin="dense" variant="contained" size="small" onClick={() => AdicionarUsuario()}>Cadastrar</Button>
    </div>
  );
}

export default Cadastro;