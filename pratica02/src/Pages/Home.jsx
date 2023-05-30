import { useContext } from "react"
import  ContatoContext from "../context/ContatoContext"

export default function Home(){
 const {meusContatos} = useContext(ContatoContext)

  
 return(
 <>
    <h2>Meus contatos</h2>
    <ul>
    {meusContatos.map((contato, key) => <li id={key}>{contato.nome} - {contato.telefone}</li>)}
    </ul>
   
 </>
 )
}