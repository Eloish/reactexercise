import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsApi from "../../services/PostApi";
import Cards from '../../components/Cards/Cards';


const Post=()=>{
    const [postId, setPostId] = useState({});
  const { id } = useParams();
  useEffect(() => {
    PostsApi.getPostsById(id).then((data) => setPostId(data));
  }, [id]);

    return(
        <div>
            <h1>Post</h1>
            <Cards {...postId} />
            
        </div>
    )
}
export default  Post;