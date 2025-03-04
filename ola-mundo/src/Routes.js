import Rodape from "componentes/Rodape/rodape.js";
import Menu from "./componentes/menu/menu.js";
import Inicio from "./paginas/inicio/inicio.js";
import SobreMim from "./paginas/sobre-mim.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function AppRoutes() {
  return (
    <BrowserRouter>

        <Menu/>

        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobremim" element={<SobreMim/>}/>
            <Route path="*" element={<div>Erro 404</div>}/>
        </Routes>

        <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes