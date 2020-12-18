import style from './MyPosts.module.css';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const MyPosts = (props) => {
  // let postsData = [
  //   {id: 1, text: 'Hi, how are you???', likesCount: 70},
  //   {id: 2, text: "It's my first post.", likesCount: 50},
  //   {id: 3, text: "It's my second post.", likesCount: 100}
  // ]
  let posts = props.postsData.map(
    post => <Post message= {post.text} like={post.likesCount} />
  );

  return (
    <div className={style.myPosts}>
        <h3 className={style.title}>My posts</h3>
        <NewPost dispatch={props.dispatch} newPostText={props.newPostText}/>
        <div className={style.posts}>
          {posts}
        </div>
    </div>
  );
}

export default MyPosts;
