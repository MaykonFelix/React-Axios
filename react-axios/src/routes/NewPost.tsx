import blogFetch from "../axios/config"

import "./NewPost.css"

import { useState } from "react"
import { useNavigate } from "react-router-dom";



export const NewPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const createPost = async (e) => {
        e.preventDefault();

        const post = { title, body, userId: 1 };
        console.log(post)
        await blogFetch.post("/posts", {
            body: post,
        })

        navigate("/")
    }

    return (
        <div className="new-post">
            <h2>Inserir novo Post</h2>
            <form onSubmit={(e) => createPost(e)}>
                <div className="form-control">
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Digite o Titulo"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="body">Conteúdo</label>
                    <textarea
                        name="body"
                        id="body"
                        placeholder="Digite o conteúdo"
                        onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Criar" className="btn" />
            </form>
        </div>
    )
}
