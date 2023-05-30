import { ContatoContextProvider } from './context/ContatoContext.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(


  <React.StrictMode>
    <ContatoContextProvider>
      <App />
    </ContatoContextProvider>
  </React.StrictMode>,




)
