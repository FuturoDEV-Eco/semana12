import CButton from "../atoms/CButton/CButton";
import CInput from "../atoms/CInput/CInput";
import { useState } from "react";

function FormCadastroUsuario({submit}) {
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: ""
  })

  function AdicionarUsuario(){
    submit(novoUsuario)
    setNovoUsuario({
      nome: "",
      email: ""
    })
  }

  return (
    <>
      <CInput
        label="Nome"
        onChange={(evento) =>
          setNovoUsuario({ ...novoUsuario, nome: evento.target.value })
        }
      />
      <CInput
        label="Email"
        onChange={(evento) =>
          setNovoUsuario({ ...novoUsuario, email: evento.target.value })
        }
      />
      <CButton color="outlined" onClick={() => AdicionarUsuario()}>Cadastrar</CButton>
    </>
  );
}

export default FormCadastroUsuario
