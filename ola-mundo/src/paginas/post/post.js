import styles from "paginas/post/post.module.css"
import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/post-modelo/post-modelo"
function Post(){
    const paramentros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id)
    })
    
    const capas = require(`assets/posts/${post.id}/capa.png`)

    console.log(post);
    return (
        <PostModelo fotoCapa={capas} titulo={post.titulo}>

            Texto...
        </PostModelo>
    )
}
export default Post