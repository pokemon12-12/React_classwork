import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../Store/Post-List-Store";

const Postlist=()=>{
    const {PostList}=useContext(PostListContext);
    return(
        <>
        {PostList.map((post)=>(<Post key={post.id} post={post}></Post>))}
        </>
    );
}
export default Postlist;