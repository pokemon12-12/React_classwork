import { useReducer } from "react";
import { createContext } from "react";

export const PostListContext=createContext({        //this is the consumer of the data
    PostList:[],
    AddPost:()=>{},
    DeletePost:()=>{}
});

// just render the actions aand gets passed to the reeducer context 
const PostListReducer=(CurrPostList,action)=>{
    return CurrPostList;
};
 
//This is the provider of the data 

const PostListProvider=({children})=>{
    const [PostList,dispatchPost]=useReducer(PostListReducer,DEFAULT_POST_LIST);

    const AddPost=()=>{

    }

    const DeletePost=(postid)=>{
        console.log(`Delete post clicked for the post ${postid}`);
    }
    return(
   <PostListContext.Provider value={{PostList:PostList, AddPost:AddPost, DeletePost:DeletePost}}>
    {children}
   </PostListContext.Provider>
    );
};

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Go To Mumbai',
    body:'Hi! i am going to mumbai, Hope i will have amazing experience',
    reaction:'2',
    userid:'user-9',
    tags:['Vacatin', 'mumbai', 'trip']
}, 
{
    id:'2',
    title:'Pass ho gay hai',
    body:'4 saal masti ke baad ham pass ho gay. seems unbelivable',
    reaction:'15',
    userid:'user-20',
    tags:['Excitment','Energy','opportunities']
}];

export default PostListProvider;