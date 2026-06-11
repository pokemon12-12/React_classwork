import { useReducer } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  //this is the consumer of the data
  PostList: [],
  AddPost: () => {},
  DeletePost: () => {},
});

// just render the actions aand gets passed to the reeducer context

const PostListReducer = (CurrPostList, action) => {
  let newPostList = CurrPostList;
  if (action.type === "DELETE_POST") {
    newPostList = CurrPostList.filter(
      (post) => post.id !== action.payload.postid,
    ); // filter connditon keeps the true elemt and delete the not true
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...CurrPostList];
  }
  return newPostList;
};

//This is the provider of the data

const PostListProvider = ({ children }) => {
  const [PostList, dispatchPost] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST,
  );

  const AddPost = (UserId, postTitle, body, tags, reactions) => {
    dispatchPost({
      type: "ADD_POST",
      payload: {
        id: UserId,
        title: postTitle,
        body: body,
        reaction: reactions,
        userId: Date.now(),
        tags: tags,
      },
    });
  };

  const DeletePost = (postid) => {
    dispatchPost({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };
  return (
    <PostListContext.Provider
      value={{ PostList: PostList, AddPost: AddPost, DeletePost: DeletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go To Mumbai",
    body: "Hi! i am going to mumbai, Hope i will have amazing experience",
    reaction: "2",
    userid: "user-9",
    tags: ["Vacatin", "mumbai", "trip"],
  },
  {
    id: "2",
    title: "Pass ho gay hai",
    body: "4 saal masti ke baad ham pass ho gay. seems unbelivable",
    reaction: "15",
    userid: "user-20",
    tags: ["Excitment", "Energy", "opportunities"],
  },
];

export default PostListProvider;
