import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./Home.css"

const Home = () => {

    const [posts, setPosts] = useState([])
    console.log(posts)
    const getPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

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
        <div>home</div>
    )
}

export default Home