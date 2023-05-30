import { useForm } from "react-hook-form"
import { useContext } from "react"
import ContatoContext from "../context/ContatoContext"
import { useNavigate } from "react-router-dom"



export default function Novo() {
   const { register, handleSubmit, formState: { errors } } = useForm()

   const {incluirContato} = useContext(ContatoContext)

   const navigate = useNavigate()
   function onSubmit(data) {
    incluirContato(data)
    navigate("/")
   }


   return (
       <>
       <h2>Novo Contato</h2>

       <form onSubmit={handleSubmit(onSubmit)}>
         <label>Nome</label>
         <input type="text" {...register("nome", {required: "Campo obrigatório"})}/>
         {errors.nome && <p>{errors.nome.message}</p>}

         <label>Telefone</label>
         <input type="text" {...register("telefone", {required: "Campo obrigatório"})}/>
         {errors.telefone && <p>{errors.telefone.message}</p>}

         <button>ENVIAR</button>
         
       </form>
       </>
    )
   }