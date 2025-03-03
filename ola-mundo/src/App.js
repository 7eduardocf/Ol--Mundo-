import Inicio from "./paginas/inicio.js";
import SobreMim from "./paginas/sobre-mim.js";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/sobremim" element={<SobreMim/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App