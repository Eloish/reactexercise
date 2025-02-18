import React, { useState, useEffect } from "react";
import PostsApi from "../../services/PostApi";
import Cards from '../../components/Cards/Cards';
import { Link } from 'react-router-dom';
const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
      PostsApi.getPosts().then((data) => setPosts(data));
    }, []);
    return(
        <div>
            <h1>Posts</h1>
            {
                

                posts.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id}>
                        <Cards key={post.id} {...post} />

                    </Link>
                ))
            }

        </div>
    )
}
export default Posts;