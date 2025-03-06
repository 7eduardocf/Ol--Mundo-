import Banner from "componentes/banner/banner.js"
import { Outlet } from "react-router-dom"

function PaginaPadrao(){
    return(
        <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}

export default PaginaPadrao