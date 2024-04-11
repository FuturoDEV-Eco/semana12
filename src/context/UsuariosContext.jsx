/**
 * PASSOS PARA CRIAR UM CONTEXTO
 * 
 * 1 - [x] - IMPORTE O createContext DO REACT
 * 2 - [x] - CRIAR A VARIÁVEL DO CONTEXTO
 * 3 - [x] - EXPORTAR A VARIÁVEL DO CONTEXTO
 * 
 * 4 - [x] - CRIE E EXPORTE A VARIÁVEL DO PROVIDER
 * 5 - [x] - RECEBA A PROP CHILDREN
 * 6 - [x] - DEFINA OS DADOS GLOBAIS
 * 7 - [x] - CRIE O JSX DO PROVIDER E PASSE OS DADOS GLOBAIS NA PROP value
 * 8 - [x] - IMPORTE O PROVIDER NO ARQUIVO APP.JSX
 * 
 * 9 - [x] - IMPORTE O CONTEXTO NO ARQUIVO QUE FOR UTILIZAR
 * 10 - [] - IMPORTE O useContext DO REACT
 * 11 - [] - RECEBA OS DADOS GLOBAIS USANDO O useContext
 */

import {createContext, useState} from "react"

export const UsuariosContext = createContext()

// provider
export const UsuariosContextProvider = ({children}) => {
  const [usuarios, setUsuarios] = useState([
    {
      nome: "Bruno",
      email: "email@email.com"
    },
    {
      nome: "Renata",
      email: "email@email.com"
    },
    {
      nome: "Lucas",
      email: "email@email.com"
    }
  ])

  function DizerOla(){
    alert("Ola")
  }

  return (
    <UsuariosContext.Provider value={{usuarios, setUsuarios, DizerOla}}>
      {children}
    </UsuariosContext.Provider>
  )
}