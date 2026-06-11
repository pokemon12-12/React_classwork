import { useContext } from "react";
import { PostListContext } from "../Store/Post-List-Store";
import { useRef } from "react";

const CreatePost = () => {
  const { AddPost } = useContext(PostListContext);

  const UserIdElement = useRef();
  const postTitleElement = useRef();
  const bodyElement = useRef();
  const tagsElement = useRef();
  const reactionElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const UserId = UserIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const body = bodyElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    const reactions = reactionElement.current.value;

    AddPost(UserId, postTitle, body, tags, reactions);

    UserIdElement.current.value = " ";
    postTitleElement.current.value = " ";
    bodyElement.current.value = " ";
    tagsElement.current.value = " ";
    reactionElement.current.value = " ";
  };

  return (
    <form className="form_design" onSubmit={handleOnSubmit}>
      <div className="mb-3 Create_post">
        <label htmlFor="PostHeading" className="form-label">
          User Id
        </label>
        <input
          ref={UserIdElement}
          type="text"
          className="form-control"
          id="User-id"
          placeholder="User-ID"
        />
      </div>

      <div className="mb-3 Create_post">
        <label htmlFor="PostHeading" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="PostHeading"
          placeholder="Enter the post title"
        />
      </div>

      <div className="mb-3 Create_post">
        <label htmlFor="PostContent" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          ref={bodyElement}
          className="form-control description"
          id="PostContent"
          placeholder="How are you feeling today!"
        />
      </div>

      <div className="mb-3 Create_post">
        <label htmlFor="GetTags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>

      <div className="mb-3 Create_post">
        <label htmlFor="reactions" className="form-label">
          reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="reaction"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
