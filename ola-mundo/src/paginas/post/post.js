import "paginas/post/post.css"
import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/post-modelo/post-modelo"
import ReactMarkdown from "react-markdown"
import PaginaPadrao from "componentes/pagina-padrao/paginaPadrao"

function Post() {
    const paramentros = useParams()

    const post = posts.find((post) => {
        return post.id === Number(paramentros.id)
    })

    const capas = require(`/public/imagens/${post.id}/capa.png`)

    console.log(post);
    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <PostModelo fotoCapa={capas} titulo={post.titulo}>
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>
                    </PostModelo>} />
            </Route>
        </Routes>
    )
}
export default Post