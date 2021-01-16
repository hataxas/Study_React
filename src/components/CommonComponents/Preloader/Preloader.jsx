import React from 'react';
import style from './Preloader.module.css';

let Preloader = (props) => {
  return <div className={style.preloader}>
    <img className={style.preloader_img} src="/img/preloader.svg" alt="" />
  </div>
}

export default Preloader;
