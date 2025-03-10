import Rodape from "componentes/Rodape/rodape.js";
import Menu from "./componentes/menu/menu.js";
import Inicio from "./paginas/inicio/inicio.js";
import SobreMim from "./paginas/sobremim/sobre-mim.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import PaginaPadrao from "componentes/pagina-padrao/paginaPadrao.js";
import Post from "paginas/post/post.js";

function AppRoutes() {
  return (
    <BrowserRouter>

        <Menu/>

        <Routes>
            <Route path="/" element={<PaginaPadrao/>}>
                <Route index element={<Inicio/>}/>
                <Route path="sobremim" element={<SobreMim/>}/>
                <Route path="posts/:id" element={<Post/>}/>
            </Route>
            <Route path="*" element={<div>Erro 404</div>}/>
        </Routes>

        <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes