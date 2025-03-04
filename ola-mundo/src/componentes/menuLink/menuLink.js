import styles from "./menuLink.module.css"
import { Link, useLocation } from "react-router-dom"

function MenuLink({children, to}){
    const localizacao = useLocation()
    return (
        <Link className={
            `${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
                {children}
        </Link>
    )
}

export default MenuLink