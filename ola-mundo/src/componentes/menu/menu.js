import styles from"./menu.module.css"
import MenuLink from "../menuLink/menuLink.js"

function Menu(){
    return(
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre mim
                </MenuLink>            
            </nav>
        </header>
    )
}

export default Menu
