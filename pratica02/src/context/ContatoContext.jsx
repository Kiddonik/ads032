import { createContext, useState } from "react";

const ContatoContext = createContext
    (
        {
            meusContatos: [],
            incluirContato: () => { },
        }

    )


export function ContatoContextProvider(props) {

    const [contatos, setContatos] = useState([])

    const contexto = {
        meusContatos: contatos,
        incluirContato: incluir,
    }

    function incluir(contato) {

        setContatos([...contatos, contato])

    }

    return (

        <ContatoContext.Provider value={contexto}>
            {props.children}
        </ContatoContext.Provider>
    )

}

export default ContatoContext

