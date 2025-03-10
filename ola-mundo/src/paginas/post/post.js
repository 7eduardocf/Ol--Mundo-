import "paginas/post/post.css"
import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/post-modelo/post-modelo"
import ReactMarkdown from "react-markdown"

function Post(){
    const paramentros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id)
    })
    
    const capas = require(`/public/imagens/${post.id}/capa.png`)

    console.log(post);
    return (
        <PostModelo fotoCapa={capas} titulo={post.titulo}>
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    )
}
export default Post