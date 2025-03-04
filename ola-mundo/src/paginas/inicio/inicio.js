import Banner from "componentes/banner/banner.js"
import styles from "./inicio.module.css"
import posts from "json/posts.json"
import Post from "componentes/post/post.js"


function Inicio(){
    return(
        <main>
            <Banner/>
            <ul className={styles.posts}>
                {posts.map( post =>{
                    return( 
                        <li key={post.id}>
                            <Post post={post}/>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}

export default Inicio