import style from './MainImage.module.css';

const MainImage = (props) => {
  return (
    <div className={style.mainImage}>
      <img alt='' src='https://images.unsplash.com/photo-1550400429-12120fdb39ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
    </div>
  );
}

export default MainImage;
