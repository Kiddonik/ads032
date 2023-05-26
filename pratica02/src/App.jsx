
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Novo from "./Pages/Novo"
import Error404 from "./Pages/Erro404"
import Layout from "./Components/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/novo" element={<Novo />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}
