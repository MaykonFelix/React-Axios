import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import blogFetch from "../axios/config"

import "./Home.css"

interface setType {
    title: string;
    id: number;
    body: string;
}

const Home = () => {

    const [posts, setPosts] = useState([])
    console.log(posts)
    const getPosts = async () => {
        try {
            const response = await blogFetch.get('/posts');

            const data = response.data;

            setPosts(data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <div className="home">
            <h1>Ultimos posts</h1>
            {posts.length === 0 ?
                (<p>Carregando..</p>) :
                (posts.map((post: setType) => (
                    <div className="post" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link to={`/`} className="btn">Ler Mais</Link>
                    </div>
                ))
                )}
        </div>
    )
}

export default Home