import { Link } from "react-router-dom";
import styles from "./post.module.css"
import BotaoPrincipal from "../botao-principal/botao-principal.js"


function PostCard({post}){
    const capa = require(`/public/imagens/${post.id}/capa.png`);
    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img className={styles.capa} src={capa} alt="Imagem de capa do post"/>
                
                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>
                    Ler
                </BotaoPrincipal>
            </div>
        </Link>
    )
}

export default PostCard