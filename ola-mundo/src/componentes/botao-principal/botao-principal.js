import styles from "./botao-principal.module.css"

function BotaoPrincipal({children, tamanho}){
    return(
        <button className={`${styles.botaoPrincipal} ${styles[tamanho]}`}>{children}</button>
    )
}

export default BotaoPrincipal