import styles from "./post.module.css"

function Post({post}){
    const capa = require(`../../assets/posts/${post.id}/capa.png`);
    return (
        <div className={styles.post}>
            <img className={styles.capa} src={capa} alt="Imagem de capa do post"/>
            
            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>Ler</button>
        </div>
    )
}

export default Post