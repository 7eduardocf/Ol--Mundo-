import styles from "./inicio.module.css"
import posts from "json/posts.json"
import Post from "componentes/post/post.js"


function Inicio(){
    return(
            <ul className={styles.posts}>
                {posts.map( post =>{
                    return( 
                        <li key={post.id}>
                            <Post post={post}/>
                        </li>
                    )
                })}
            </ul>
    )
}

export default Inicio