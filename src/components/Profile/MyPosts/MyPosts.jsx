import style from './MyPosts.module.css';
import NewPostContainer from './NewPost/NewPostContainer';
import Post from './Post/Post';

const MyPosts = (props) => {

  let posts = props.store.getState().profilePage.postsData.map(
    post => <Post message= {post.text} like={post.likesCount} />
  );

  return (
    <div className={style.myPosts}>
        <h3 className={style.title}>My posts</h3>
        <NewPostContainer store = {props.store}/>
        <div className={style.posts}>
          {posts}
        </div>
    </div>
  );
}

export default MyPosts;
