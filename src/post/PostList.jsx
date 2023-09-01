import classes from "./PostList.module.css";
import { useSelector} from "react-redux"
import { selectAllPosts } from "../../store/posts-slice";
import PostAuthor from "../screen/PostAuthor";
import Timeago from "../screen/Timeago";
const PostList = () => {
    const post = useSelector(selectAllPosts);

    const orderedPosts = post.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPost = orderedPosts.map(post => (
    <article key={post.id} className={classes.card}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <PostAuthor userId={post.userId} />
        <Timeago timestamp={post.date} />
    </article>
    ))
    
    return(
        <div>
            <h2>Posts</h2>
            {renderedPost}
        </div>
    )
};

export default PostList