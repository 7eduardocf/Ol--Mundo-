import styles from "paginas/post/post.module.css"
import { useParams } from "react-router-dom"
function Post(){
    const paramentros = useParams()
    console.log(paramentros);
    
    return (
        <h1>
            Post: {paramentros.id}
        </h1>
    )
}
export default Post