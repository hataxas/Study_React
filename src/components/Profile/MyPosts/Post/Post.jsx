import style from './Post.module.css';

const Post = (props) => {
  return (
    <div className={style.post}>
      <div className={style.item}>
        <img className={style.img} src='https://images.unsplash.com/photo-1538099023053-30e7da644196?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' alt='' />
        <div className={style.message}>{props.message}</div>
      </div>
      <div>
        <span className={style.like}>
          Like: {props.like}
        </span>
      </div>
    </div>
  );
}

export default Post;
